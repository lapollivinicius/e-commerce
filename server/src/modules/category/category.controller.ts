import type { Request, Response, NextFunction } from "express";
import {
  getCategoryBySlug,
  listCategories,
} from "@/modules/category/category.service.js";
import type {
  queryType,
  slugParamType,
} from "@/modules/category/category.schema.js";

export async function getAllCategories(
  req: Request<queryType>,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await listCategories(req.query);
    return res.status(200).json({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}

export async function getCategory(
  req: Request<slugParamType>,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await getCategoryBySlug(req.params);
    return res.status(200).json({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}
