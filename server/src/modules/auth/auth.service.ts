import {
  registerUserSchema,
  type registerUserType,
} from "@/modules/auth/auth.schema.js";
import { createUser, findUserByEmail } from "@/modules/users/user.repository.js";
import { ErrorHandler } from "@/helpers/error.js";
import argon2 from "argon2";
import { randomUUID } from "node:crypto";

export async function registerUser(reqBody: registerUserType) {
  const { email, password } = registerUserSchema.parse(reqBody);
  const user = await findUserByEmail(email);

  if (user.length > 0) {
    throw new ErrorHandler("User Already registed", 409, "DATA_ALREADY_EXISTS");
  }

  const passwordHash = await argon2.hash(password);
  const userCreated = createUser({ user_id: randomUUID(), email, passwordHash });

  if (!userCreated) {
    throw new ErrorHandler("Error to save user", 500, "INTERNAL_SERVER_ERROR");
  }

  return { message: "User was registed" };
}
