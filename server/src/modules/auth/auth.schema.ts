import * as z from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(64, "Password must be at most 64 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[ @#$ ]/, "Password can contain only @, # or $ as special character");

export const registerUserSchema = z
  .object({
    email: z.email(),
    password: passwordSchema,
    confirm_password: passwordSchema,
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });

export type registerUserType = z.infer<typeof registerUserSchema>;
