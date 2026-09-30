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

  await database.query(cart, [cart_id, "76ed217d-4c9f-4cc5-b681-1101e82350fe"])
  await database.query(cartItem1, [randomUUID(), cart_id, "9317f288-9c90-4337-b533-d7f43883e22a", 1])
  await database.query(cartItem2, [randomUUID(), cart_id, "60d7f2e3-ebcb-42d8-a796-53e6f40d0ee6", 1])
}

seedCart()