import type { Request, Response, NextFunction } from "express";
import { productParamsSchema, productQuerySchema } from "./product.schema.js";
import { getProductBySlug, listProducts } from "./product.service.ts";

export async function getProducts(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const query = productQuerySchema.parse(req.query);
    const response = await listProducts(query);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

export async function getProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { slug } = productParamsSchema.parse(req.params);
    const response = await getProductBySlug(slug);

    if(!response) {
      return res.status(404).json({msg: 'product not found'})
    }

    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}
