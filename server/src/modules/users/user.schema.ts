import * as z from "zod"

export const userSchema = z.object({
  user_id: z.uuid(),
  email: z.email(),
  password: z.string(),
  is_active: true,
  create_at: z.date().optional(),
  update_at: z.date().optional()
})

export type userType = z.infer<typeof userSchema>