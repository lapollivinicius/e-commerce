import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedProduct() {
  const product_id = randomUUID();
  const category_id = randomUUID();
  const category = `
    INSERT INTO categories (
      category_id,
      category,
      description
    ) VALUES (
      $1,
      't-shirts',
      't-shirts are nice'
    );
  `;
  const product = `
    INSERT INTO products (
      product_id,
      category_id,
      title,
      slug,
      description,
      brand,
      tags,
      metadata
    ) VALUES (
      $1,
      $2,
      'mega t-shirt black and white',
      'shirt-black-white-2-3',
      'lorem ipsum ...',
      'MEGA',
      $3,
      $4
    );
  `;

  await database.query(category, [category_id]);
  await database.query(product, [
    product_id,
    category_id,
    ["offer", "10% off"],
    { height: 100.0 },
  ]);
}

seedProduct();
