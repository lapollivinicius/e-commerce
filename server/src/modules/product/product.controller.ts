import type { NextFunction, Request, Response } from "express";
import {
  getProductBySlug,
  listProducts,
} from "@/modules/product/product.service.js";
import type {
  queriesType,
  slugParamType,
} from "@/modules/product/product.schema.js";

export async function getAllProducts(
  req: Request<queriesType>,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await listProducts(req.query);
    return res.status(200).json({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}

export async function getProduct(
  req: Request<slugParamType>,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await getProductBySlug(req.params);
    return res.status(200).json({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}
