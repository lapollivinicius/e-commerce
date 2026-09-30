import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedProduct() {
  const product_id = randomUUID();
  const variant_id = randomUUID();
  // const product = `
  //   INSERT INTO products (
  //     product_id,
  //     category_id,
  //     title,
  //     slug,
  //     description,
  //     brand,
  //     tags,
  //     metadata
  //   ) VALUES (
  //     $1,
  //     'baf5218c-e98f-4d60-b48e-192028b42440',
  //     'mega t-shirt black and white',
  //     'shirt-black-white',
  //     'lorem ipsum ...',
  //     'MEGA',
  //     $2,
  //     $3
  //   );
  // `;

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
      '049e6fe7-25c9-4692-836c-f10d9972bac3', 
      9990,
      8990,
      10,
      $2,
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

  // await database.query(product, [
  //   product_id,
  //   ["offer", "10% off"],
  //   { height: 100.0 },
  // ]);
  await database.query(variant, [variant_id, "SHIRT-WHITE-LARGE"]);
  await database.query(option1, [randomUUID(), variant_id, "color", "white"]);
  await database.query(option2, [randomUUID(), variant_id, "size", "medium"]);
}

seedProduct();
