import 'dotenv/config'
import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedCategories() {
  const category1 = `
    INSERT INTO categories (
      category_id,
      category,
      slug,
      thumbnail,
      description
    ) VALUES (
      $1,
      'pants',
      'pants',
      'image.png',
      'pants are nice'
    );
  `;
  const category2 = `
    INSERT INTO categories (
      category_id,
      category,
      slug,
      thumbnail,
      description
    ) VALUES (
      $1,
      't-shirts',
      'shirts',
      'image.png',
      't-shirts are nice'
    );
  `;
  const category3 = `
    INSERT INTO categories (
      category_id,
      category,
      slug,
      thumbnail,
      description
    ) VALUES (
      $1,
      'caps',
      'caps',
      'image.png',
      'caps are nice'
    );
  `;

  await database.query(category1, [randomUUID()]);
  await database.query(category2, [randomUUID()]);
  await database.query(category3, [randomUUID()]);
}

seedCategories();
