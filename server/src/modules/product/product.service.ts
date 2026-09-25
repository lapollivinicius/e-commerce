import { mapProduct } from "./product.mapper.ts";
import { findAll, findBySlug } from "./product.repository.js";
import {
  getProductSchema,
  ListProductsSchema,
  type ListProductsQueriesType,
  type GetProductType,
  type ListProductsType,
} from "./product.schema.js";

export async function listProducts(
  query: ListProductsQueriesType,
): Promise<ListProductsType> {
  const data = await findAll(query);
  const pagination = {
    page: query.page ?? 1,
    limit: query.limit ?? 10,
    total: data.length,
  };
  const response = ListProductsSchema.parse({ data, pagination });
  return response;
}

export async function getProductBySlug(
  slug: string,
): Promise<GetProductType | null> {
  const rows = await findBySlug(slug);
  const data = mapProduct(rows);
  if (!data) {
    return null;
  }
  const response = getProductSchema.parse({ data: data });
  return response;
}
