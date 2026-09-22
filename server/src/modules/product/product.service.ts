import { findAll } from "./product.repository.js";
import type {
  productQueryType,
  productResponseType,
} from "./product.schema.js";

export async function listProducts(
  query: productQueryType,
): Promise<productResponseType> {
  const data = await findAll(query);
  const pagination = {
    page: query.page ?? 1,
    limit: query.limit ?? 10,
    count: data.length,
  };
  return { data, pagination };
}
