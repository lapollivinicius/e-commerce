import type { Request, Response, NextFunction } from "express";
import { getOrderById, listOrders } from "@/modules/order/order.service.js";
import type { orderIdType } from "@/modules/order/order.schema.js";

export async function getAllOrders(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await listOrders(req.session.user_id!, req.query);
    res.json({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}

export async function getOrder(
  req: Request<{ order_id: orderIdType }>,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await getOrderById(
      req.session.user_id!,
      req.params.order_id,
    );
    res.json({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}
