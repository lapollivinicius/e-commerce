import * as z from "zod";

export const categorySchema = z.object({
  category_id: z.uuid(),
  category: z.string(),
  slug: z.string(),
  thumbnail: z.string(),
  featured: z.boolean(),
  description: z.string(),
  banner: z.string(),
});

export const categoriesSchema = z.array(
  z.object({
    category: z.string(),
    slug: z.string(),
    thumbnail: z.string(),
  }),
);

export const querySchema = z.object({
  limit: z.coerce.number().int().positive().optional(),
  sort: z.enum(["ASC", "DESC"]).optional(),
});

export const slugParamSchema = z.object({
  slug: z.string(),
});

export type categoryType = z.infer<typeof categorySchema>;
export type categoriesType = z.infer<typeof categoriesSchema>;
export type queryType = z.infer<typeof querySchema>;
export type slugParamType = z.infer<typeof slugParamSchema>;
