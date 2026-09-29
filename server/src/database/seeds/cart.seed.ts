import 'dotenv/config'
import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedCart() {

  const cart_id = randomUUID();
  const cart = `
    INSERT INTO carts (cart_id, user_id)
    VALUES ($1, $2)
  `
  const cartItem1 = `
    INSERT INTO cart_items (cart_item_id, cart_id, variant_id, quantity)
    VALUES ($1, $2, $3, $4)
  `
  const cartItem2 = `
    INSERT INTO cart_items (cart_item_id, cart_id, variant_id, quantity)
    VALUES ($1, $2, $3, $4)
  `

  await database.query(cart, [cart_id, "894a3090-88f5-4d8b-8a08-8f1da49a9855"])
  await database.query(cartItem1, [randomUUID(), cart_id, "40131190-d665-4924-8c11-f8cb424bf108", 1])
  await database.query(cartItem2, [randomUUID(), cart_id, "bf7e4d4b-74cd-4180-b124-6a0b5ec653b9", 1])
}

seedCart()