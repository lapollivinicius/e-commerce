import { userIdSchema, type userIdType } from "@/modules/user/user.schema.js";
import { querySchema } from "@/modules/order/order.schema.js";
import { findAll } from "./order.repository.ts";

export async function listOrders(user_id: userIdType, reqQuery: unknown) {
  const userId = userIdSchema.parse(user_id)
  const query = querySchema.parse(reqQuery)
  const data = findAll(userId, query)
  return data
}