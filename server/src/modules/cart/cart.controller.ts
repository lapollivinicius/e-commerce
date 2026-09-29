import type { Request, Response, NextFunction } from "express";
import { listCartItems } from "./cart.service.ts";

export async function getCartItems(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await listCartItems(req.session.user_id!);
    res.status(200).json({ ...response, success: true, error: null });
  } catch (err) {
    next(err)
  }
}
