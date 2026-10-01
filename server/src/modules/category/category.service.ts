import { ErrorHandler } from "@/helpers/error.js";
import { findAll, findBySlug } from "@/modules/category/category.repository.js";
import {
  categoriesSchema,
  categorySchema,
  querySchema,
  type categoriesType,
  type categoryType,
  type queryType,
  type slugParamType,
} from "@/modules/category/category.schema.js";
import { slugParamSchema } from "../product/product.schema.ts";

export async function listCategories(
  reqQuery: queryType,
): Promise<{ data: categoriesType }> {
  const query = querySchema.parse(reqQuery);
  const data = await findAll(query);

  if (data.length === 0 || !data) {
    throw new ErrorHandler("categories not found", 404, "RESOURCE_NOT_FOUND");
  }

  const categories = categoriesSchema.parse(data);

  return { data: categories };
}

export async function getCategoryBySlug(
  reqParam: slugParamType,
): Promise<{ data: categoryType }> {
  const { slug } = reqParam
  const data = await findBySlug(slug);

  if (!data) {
    throw new ErrorHandler("category not found", 404, "RESOURCE_NOT_FOUND");
  }

  const category = categorySchema.parse(data);

  return { data: category };
}
