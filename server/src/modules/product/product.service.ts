import { mapProduct } from "./product.mapper.ts";
import { findAll, findBySlug } from "./product.repository.js";
import type {
  productQueryType,
  productsResponseType,
  productDetailedType,
} from "./product.schema.js";

export async function listProducts(
  query: productQueryType,
): Promise<productsResponseType> {
  const data = await findAll(query);
  const pagination = {
    page: query.page ?? 1,
    limit: query.limit ?? 10,
    count: data.length,
  };
  return { data, pagination };
}

export async function getProductBySlug(slug: string) {
  const rows = await findBySlug(slug);
  const product = mapProduct(rows)

  if(!product) return null

  return { data: product }
}
