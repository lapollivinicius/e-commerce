import { database } from "@/database/pool.js";
import type { userIdType } from "@/modules/user/user.schema.js";

export async function findAllCartItems(user_id: userIdType) {
  const { rows } = await database.query(
    `
      SELECT
        v.variant_id,
        p.title,
        p.slug,
        p.brand,
        v.price,
        v.comparison_price,
        ci.quantity
      FROM carts c
      JOIN cart_items ci
        ON ci.cart_id = c.cart_id
      JOIN variants v
        ON v.variant_id = ci.variant_id
      JOIN products p
        ON p.product_id = v.product_id
      WHERE c.user_id = $1;
    `,
    [user_id],
  );

  return rows;
}
