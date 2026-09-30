import { database } from "@/database/pool.js";
import type { userIdType } from "@/modules/user/user.schema.js";
import type { queryType } from "@/modules/order/order.schema.js";

export async function findAll(userId: userIdType, query: queryType) {
  const { rows } = await database.query(
    `
    SELECT * FROM orders
    WHERE user_id = $1
    `,
    [userId]
  )
  return rows
}