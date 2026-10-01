import { userIdSchema, type userIdType } from "@/modules/user/user.schema.js";
import {
  listOrdersSchema,
  orderDetailsSchema,
  orderIdSchema,
  querySchema,
  type orderIdType,
  type queryType,
} from "@/modules/order/order.schema.js";
import { findAll, findById } from "./order.repository.ts";
import { mapOrderDetails, mapOrders } from "./order.mapper.ts";
import { ErrorHandler } from "@/helpers/error.js";

export async function listOrders(user_id: userIdType, reqQuery: queryType) {
  const userId = userIdSchema.parse(user_id);
  const query = querySchema.parse(reqQuery);

  const orders = await findAll(userId, query);
  if (orders.length === 0) {
    throw new ErrorHandler("Orders not found", 404, "RESOURCE NOT FOUND");
  }
  const data = mapOrders(orders);
  const pagination = {
    page: query.page ?? 1,
    limit: query.limit ?? 10,
    total: data.length,
  };
  const response = listOrdersSchema.parse({ data, pagination });
  return response;
}

export async function getOrderById(user_id: userIdType, order_id: orderIdType) {
  const userId = userIdSchema.parse(user_id);
  const orderId = orderIdSchema.parse(order_id);
  const order = await findById(userId, orderId)
  if (order.length === 0 || !order) {
    throw new ErrorHandler("Orders not found", 404, "RESOURCE NOT FOUND");
  }
  const data = mapOrderDetails(order)
  const response = orderDetailsSchema.parse(data)
  return { data: response }
}
