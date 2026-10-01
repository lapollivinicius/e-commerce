import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedProduct() {
  const product_id = randomUUID();
  const variant_id1 = randomUUID();
  const variant_id2 = randomUUID();
  const variant_id3 = randomUUID();
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
      '7dc28741-2f1f-4f1a-9d40-cfc37386dcfa',
      'mega t-shirt black and white',
      'shirt-black-white',
      'lorem ipsum ...',
      'MEGA',
      $2,
      $3
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
      $3,
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
      $3,
      $4
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
      $3,
      $4
    );
  `;

  await database.query(product, [
    product_id,
    ["offer", "10% off"],
    { height: 100.0 },
  ]);

  await database.query(variant, [variant_id1, product_id, "SHIRT-WHITE-SMALL"]);
  await database.query(option1, [randomUUID(), variant_id1, "color", "white"]);
  await database.query(option2, [randomUUID(), variant_id1, "size", "small"]);

  await database.query(variant, [variant_id2, product_id, "SHIRT-WHITE-MEDIUM"]);
  await database.query(option1, [randomUUID(), variant_id2, "color", "white"]);
  await database.query(option2, [randomUUID(), variant_id2, "size", "medium"]);

  await database.query(variant, [variant_id3, product_id, "SHIRT-WHITE-LARGE"]);
  await database.query(option1, [randomUUID(), variant_id3, "color", "white"]);
  await database.query(option2, [randomUUID(), variant_id3, "size", "large"]);
}

seedProduct();
