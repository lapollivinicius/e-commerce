import * as z from "zod"

export const querySchema = z.object({
  limit: z.coerce.number().int().positive().optional(),
  featured: z
    .enum(["true", "false"])
    .transform((value) => value === "true")
    .optional(),
  sort: z.enum(["ASC", "DESC"]).optional(),
});

export const slugParamSchema = z.object({
  slug: z.string(),
});

export type queryType = z.infer<typeof querySchema>;
export type slugParamType = z.infer<typeof slugParamSchema>;
