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
      order_id,
      product_id,
      variant_id,
      quantity,
      unit_price
    ) 
    VALUES(
      $1,
      $2,
      $3,
      $4,
      1,
      19990
    );
  `;

  await database.query(order, [
    order_id,
    "5595b485-a84a-4a58-83e2-7460f1d3a59a",
    "8ea3ebd8-6e1c-4d31-bd6f-210f980467ea",
  ]);
  
  await database.query(order_item, [
    randomUUID(),
    order_id,
    "4141e135-b06c-4c16-a00e-baa11f92435b",
    "af5d01bb-cc33-4d43-89fd-453725636991",
  ]);
}
seedOrder();
