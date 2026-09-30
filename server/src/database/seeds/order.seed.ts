import "dotenv/config";
import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedOrder() {
  const order_id = randomUUID();
  const order = `
    INSERT INTO orders(
      order_id,
      user_id,
      information_id,
      status,
      amount,
      update_at,
      create_at
    )
    VALUES(
      $1,
      $2,
      $3,
      'pendent',
      1,
      NOW(),
      NOW()
    );
  `;

  const order_item = `
    INSERT INTO order_items (
      order_item_id,
      order_id
      product_id,
      variant_id,
      quantity,
      unit_price,
    ) 
    VALUES(
      $1,
      $2,
      $3,
      $4,
      1,
      8990
    );
  `;

  await database.query(order, [
    order_id,
    "8f98f4a5-67e7-46e0-b8dc-ee580682d3d5",
    "8ea3ebd8-6e1c-4d31-bd6f-210f980467ea",
  ]);
  
  await database.query(order_item, [
    randomUUID(),
    order_id,
    "product_id",
    "variant_id",
  ]);
}
seedOrder();
