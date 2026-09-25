import type { Request, Response, NextFunction } from "express";
import { ListProductsQueriesSchema } from "./product.schema.js";
import { getProductBySlug, listProducts } from "./product.service.ts";
import type { productParams } from "./product.types.ts";

export async function getProducts(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const query = ListProductsQueriesSchema.parse(req.query);
    const response = await listProducts(query);

    if (!response) {
      return res
        .status(404)
        .json({ success: false, error: "PRODUCTS_NOT_FOUND" });
    }

    res.status(200).json({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}

export async function getProduct(
  req: Request<productParams>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { slug } = req.params;
    const response = await getProductBySlug(slug);

    if (!response) {
      return res
        .status(404)
        .json({ success: false, error: "PRODUCT_NOT_FOUND" });
    }

    return res.status(200).json({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}
