import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedProduct2() {
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
      'be9bbbe5-7e16-4e2a-aa0f-172af24e7d33',
      'paint shaggey',
      'paint-shaggey',
      'lorem ipsum ...',
      'OMEGA',
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
      19990,
      20990,
      4,
      $3,
      20,
      300,
      300,
      500
    );
  `;

  const option = `
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

  await database.query(variant, [variant_id1, product_id, "PAINT-SMALL"]);
  await database.query(option, [randomUUID(), variant_id1, "size", "small"]);

  await database.query(variant, [variant_id2, product_id, "PAINT-MEDIUM"]);
  await database.query(option, [randomUUID(), variant_id2, "size", "medium"]);

  await database.query(variant, [variant_id3, product_id, "PAINT-LARGE"]);
  await database.query(option, [randomUUID(), variant_id3, "size", "large"]);
}

seedProduct2();
