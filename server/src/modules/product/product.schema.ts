import * as z from "zod";

export const productSchema = z.object({
  product_id: z.uuid(),
  title: z.string(),
  slug: z.string(),
  tags: z.array(z.string()),
  brand: z.string(),
  category: z.string(),
  price: z.number().int(),
  comparison_price: z.number().int(),
});

export const productQuerySchema = z.object({
  search: z.string().optional(),
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().positive().optional(),
  category: z.string().optional(),
  featured: z
    .enum(["true", "false"])
    .transform((value) => value === "true")
    .optional(),
  sort: z.enum(["ASC", "DESC"]).optional(),
});

export const productParamsSchema = z.object({
  slug: z.string(),
});

export const responseProductsSchema = z.object({
  data: z.array(productSchema),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    count: z.number(),
  }),
});

export type productType = z.infer<typeof productSchema>;
export type productQueryType = z.infer<typeof productQuerySchema>;
export type productParamsType = z.infer<typeof productParamsSchema>;
export type productsResponseType = z.infer<typeof responseProductsSchema>;
