import {
  authenticateUserSchema,
  registerUserSchema,
  type authenticateUserType,
  type registerUserType,
} from "@/modules/auth/auth.schema.js";
import {
  createUser,
  findUserByEmail,
} from "@/modules/user/user.repository.js";
import { ErrorHandler } from "@/helpers/error.js";
import argon2 from "argon2";
import { randomUUID } from "node:crypto";

export async function registerUser(reqBody: registerUserType) {
  const { email, password } = registerUserSchema.parse(reqBody);
  const user = await findUserByEmail(email);

  if (user) {
    throw new ErrorHandler("User Already registed", 409, "DATA_ALREADY_EXISTS");
  }

  const passwordHash = await argon2.hash(password);
  const userCreated = createUser({
    user_id: randomUUID(),
    email,
    passwordHash,
  });

  if (!userCreated) {
    throw new ErrorHandler("Error to save user", 500, "INTERNAL_SERVER_ERROR");
  }

  return { message: "User was registed" };
}

export async function authenticateUser(reqBody: authenticateUserType) {
  const { email, password } = authenticateUserSchema.parse(reqBody);
  const user = await findUserByEmail(email);

  if (!user) {
    throw new ErrorHandler("User not found", 404, "RESOURCE_NOT_FOUND");
  }

  const checkPassword = await argon2.verify(user.password, password);

  if (!checkPassword) {
    throw new ErrorHandler("login unsuccessful", 401, "UNAUTHORIZED");
  }
  
  return user.user_id;
}
