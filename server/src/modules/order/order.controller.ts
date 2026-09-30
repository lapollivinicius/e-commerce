import type { Request, Response, NextFunction } from "express";
import { listOrders } from "@/modules/order/order.service.js";

export async function getAllOrders(req: Request, res: Response, next: NextFunction) {
  const response = await listOrders(req.session.user_id!, req.query)
  res.json(response)
}
