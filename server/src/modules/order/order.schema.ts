import * as z from "zod"

export const querySchema = z.object({
  sort: z.string().optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().positive().optional()
})

export type queryType = z.infer<typeof querySchema>