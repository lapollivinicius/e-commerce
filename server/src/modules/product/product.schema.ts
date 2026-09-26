import * as z from "zod";

export const getProductSchema = z.object({
  data: z.object({
    product_id: z.uuid(),
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    brand: z.string(),
    metadata: z.json(),
    category: z.string(),
    variants: z.array(
      z.object({
        variant_id: z.uuid(),
        price: z.number().int().positive(),
        comparison_price: z.number().int().positive(),
        stock: z.number().int(),
        sku: z.string(),
        height: z.number().int().positive(),
        width: z.number().int().positive(),
        weight: z.number().int().positive(),
        length: z.number().int().positive(),
        options: z.array(
          z.object({
            name: z.string(),
            value: z.string(),
          }),
        ),
      }),
    ),
  }),
});

export const ListProductsSchema = z.object({
  data: z.array(
    z.object({
      product_id: z.uuid(),
      title: z.string(),
      slug: z.string(),
      tags: z.array(z.string()),
      brand: z.string(),
      category: z.string(),
      price: z.number().int(),
      comparison_price: z.number().int(),
    }),
  ),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
  }),
});

export const queriesSchema = z.object({
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

export const slugParamSchema = z.object({
  slug: z.string(),
});

export type ListProductsType = z.infer<typeof ListProductsSchema>;
export type GetProductType = z.infer<typeof getProductSchema>;
export type queriesType = z.infer<typeof queriesSchema>;
export type slugParamType = z.infer<typeof slugParamSchema>;
