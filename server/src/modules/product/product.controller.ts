import type { Request, Response, NextFunction } from "express";
import { productQuerySchema } from "./product.schema.js";
import { listProducts } from "./product.service.ts";

export async function getProducts(req: Request, res: Response, next: NextFunction) {
  try {
    const query = productQuerySchema.parse(req.query);
    const response = await listProducts(query);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}
