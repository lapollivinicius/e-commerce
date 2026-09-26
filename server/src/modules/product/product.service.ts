import { mapProduct } from "@/modules/product/product.mapper.js";
import { findAll, findBySlug } from "@/modules/product/product.repository.js";
import {
  getProductSchema,
  ListProductsSchema,
  queriesSchema,
  slugParamSchema,
  type GetProductType,
  type ListProductsType,
  type queriesType,
  type slugParamType,
} from "@/modules/product/product.schema.js";
import { ErrorHandler } from "@/helpers/error.js";

export async function listProducts(
  reqQuery: queriesType,
): Promise<ListProductsType> {
  const queries = queriesSchema.parse(reqQuery);
  const data = await findAll(queries);
  const pagination = {
    page: queries.page ?? 1,
    limit: queries.limit ?? 10,
    total: data.length,
  };
  const response = ListProductsSchema.parse({ data, pagination });
  return response;
}

export async function getProductBySlug(
  reqParams: slugParamType,
): Promise<GetProductType> {
  const { slug } = slugParamSchema.parse(reqParams);
  const rows = await findBySlug(slug);
  const data = mapProduct(rows);
  if (!data) {
    throw new ErrorHandler("product not found", 404, "PRODUCT_NOT_FOUND");
  }
  const response = getProductSchema.parse({ data: data });
  return response;
}
