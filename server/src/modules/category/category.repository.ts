import { database } from "@/database/pool.js";
import type { queryType } from "@/modules/category/category.schema.js";

export async function findAll(query: queryType) {
  const { rows } = await database.query(
    `
    SELECT category, slug, thumbnail FROM categories;
    `,
  );
  return rows;
}

export async function findBySlug(slug: string) {
  const { rows } = await database.query(
    `
    SELECT * FROM categories 
    WHERE slug = $1
    `,
    [slug],
  );
  return rows;
}
