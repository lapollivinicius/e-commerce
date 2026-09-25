import { database } from "@/database/pool.js";
import type {
  ListProductsQueriesType,
  productType,
} from "@/modules/product/product.schema.js";
import type { productDataRaw } from "./product.types.ts";

// TODO: apply query filters to the SQL query based on the provided query parameters
export async function findAll(
  query: ListProductsQueriesType,
): Promise<productType[]> {
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
      v.comparison_price
    FROM products p

    INNER JOIN categories c
      ON c.category_id = p.category_id

    INNER JOIN LATERAL (
      SELECT
        v.price,
        v.comparison_price
      FROM variants v
      WHERE v.product_id = p.product_id
      ORDER BY v.variant_id
      LIMIT 1
    ) v ON true;
    `,
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

      v.variant_id,
      v.price,
      v.comparison_price,
      v.stock,
      v.sku,
      v.height,
      v.width,
      v.length,
      v.weight,

      o.option_id,
      o.name AS option_name,
      o.value AS option_value

    FROM products p

    INNER JOIN categories c
      ON c.category_id = p.category_id

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
