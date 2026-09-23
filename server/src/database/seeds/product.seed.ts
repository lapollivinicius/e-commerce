import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedProduct() {
  const product_id = randomUUID();
  const category_id = randomUUID();
  const variant_id = randomUUID();
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
      'shirt-black-white',
      'lorem ipsum ...',
      'MEGA',
      $3,
      $4
    );
  `;

  const variant = `
    INSERT INTO variants (
      variant_id,
      product_id,
      price,
      comparison_price,
      stock,
      sku,
      height,
      width,
      length,
      weight
    ) VALUES (
      $1,
      $2, 
      9990,
      8990,
      10,
      'SHIRT-123',
      20,
      300,
      300,
      500
    );
  `;

  const option1 = `
    INSERT INTO options (
      option_id,
      variant_id,
      name,
      value
    ) VALUES (
      $1,
      $2,
      'size',
      'medium'
    );
  `;
  const option2 = `
    INSERT INTO options (
      option_id,
      variant_id,
      name,
      value
    ) VALUES (
      $1,
      $2,
      'color',
      'white'
    );
  `;

  await database.query(category, [category_id]);
  await database.query(product, [
    product_id,
    category_id,
    ["offer", "10% off"],
    { height: 100.0 },
  ]);
  await database.query(variant, [variant_id, product_id]);
  await database.query(option1, [randomUUID(), variant_id]);
  await database.query(option2, [randomUUID(), variant_id]);
}

seedProduct();
