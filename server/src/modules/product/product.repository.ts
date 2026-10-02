import { database } from "@/database/pool.js";
import type { queryType } from "@/modules/product/product.schema.js";
import type {
  productDataRaw,
  productsDataRaw,
} from "@/modules/product/product.types.js";

export async function findAll(query: queryType): Promise<productsDataRaw[]> {
  const { search, page = 1, limit = 20, category, sort = "ASC" } = query;
  const conditions: string[] = [];
  const values: unknown[] = [];

  if (search) {
    values.push(`%${search}%`);
    conditions.push(`
      (
        p.title ILIKE $${values.length}
        OR p.brand ILIKE $${values.length}
      )
    `);
  }

  if (category) {
    values.push(category);
    conditions.push(`c.category = $${values.length}`);
  }

  const offset = (page - 1) * limit;

  values.push(limit);
  const limitParam = `$${values.length}`;

  values.push(offset);
  const offsetParam = `$${values.length}`;

  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const order = sort === "DESC" ? "DESC" : "ASC";

  const { rows } = await database.query(
    `
      SELECT
        p.product_id,
        p.title,
        p.slug,
        p.tags,
        p.brand,
        c.category,
        v.price,
        v.comparison_price,
        i.url AS image_url
      FROM products p

      INNER JOIN categories c
        ON c.category_id = p.category_id

      INNER JOIN images i
        ON i.product_id = p.product_id AND i.is_thumbnail = true

      INNER JOIN LATERAL (
        SELECT
          v.price,
          v.comparison_price
        FROM variants v
        WHERE v.product_id = p.product_id
        ORDER BY v.variant_id
        LIMIT 1
      ) v ON true

      ${where}

      ORDER BY v.price ${order}

      LIMIT ${limitParam}
      OFFSET ${offsetParam};
    `,
    values,
  );

  return rows;
}

export async function findBySlug(slug: string): Promise<productDataRaw[]> {
  const { rows } = await database.query(
    `
    SELECT
      p.product_id,
      p.title,
      p.slug,
      p.description,
      p.tags,
      p.brand,
      p.metadata,
      c.category,

      i.url AS image_url,
      i.alt AS image_alt,
      i.is_thumbnail,

      v.variant_id,
      v.price,
      v.comparison_price,
      v.stock,
      v.sku,

      o.option_id,
      o.name AS option_name,
      o.value AS option_value

    FROM products p

    INNER JOIN categories c
      ON c.category_id = p.category_id

    INNER JOIN images i
      ON i.product_id = p.product_id

    LEFT JOIN variants v
      ON v.product_id = p.product_id

    LEFT JOIN options o
      ON o.variant_id = v.variant_id

    WHERE p.slug = $1

    ORDER BY
      v.variant_id,
      o.option_id;
    `,
    [slug],
  );
  return rows;
}
