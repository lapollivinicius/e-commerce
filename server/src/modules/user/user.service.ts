import { userIdSchema, type userIdType } from "@/modules/user/user.schema.js";
import { findUserById } from "./user.repository.ts";
import { ErrorHandler } from "@/helpers/error.js";

export async function getUserById(user_id: userIdType) {
  const userId = userIdSchema.parse(user_id)
  const user = await findUserById(userId)

  if(!user) {
    throw new ErrorHandler("User not found", 404, "RESOURCE_NOT_FOUND")
  }

  return { data: user};
}