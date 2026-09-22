import { database } from "@/database/pool.js";
import type { productQueryType, productResponseType, productType } from "./product.schema.js";

export async function findAll(query: productQueryType): Promise<productType[]> {
  const { rows } = await database.query(`
    SELECT
      p.product_id,
      p.title,
      p.slug,
      c.category
    FROM products p
    INNER JOIN categories c
      ON c.category_id = p.category_id;
    `);
  return rows;
}