import { userIdSchema, type userIdType } from "@/modules/user/user.schema.js";
import { findUserById } from "@/modules/user/user.repository.js";
import { ErrorHandler } from "@/helpers/error.js";
import { findAllCartItems } from "@/modules/cart/cart.repository.js";

export async function listCartItems(user_id: userIdType) {
  const id = userIdSchema.parse(user_id)
  const user = await findUserById(id)

  if(!user) {
    throw new ErrorHandler("User not found", 404, "RESOURCE_NOT_FOUND")
  }

  const data = await findAllCartItems(user.user_id)

  if(data.length === 0 || !data) {
    throw new ErrorHandler("Cart is empty", 404, "RESOURCE_NOT_FOUND")
  }

  return { data: data }
}