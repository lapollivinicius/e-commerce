import { ErrorHandler } from "@/helpers/error.js";
import { findAll, findBySlug } from "@/modules/category/category.repository.js";
import { querySchema, type queryType, type slugParamType } from "@/modules/category/category.schema.js";

export async function listCategories(reqQuery: queryType) {
  const query = querySchema.parse(reqQuery)
  const data = await findAll(query);
  if (data.length === 0 || !data) {
    throw new ErrorHandler("categories not found", 404, "RESOURCE_NOT_FOUND");
  }
  return { data: data };
}

export async function getCategoryBySlug(reqParam: slugParamType) {
  const { slug } = reqParam
  const data = await findBySlug(slug)
  if (data.length === 0 || !data) {
    throw new ErrorHandler("category not found", 404, "RESOURCE_NOT_FOUND");
  }
  return { data: data };
}