import { database } from "@/database/pool.js";
import type { userIdType } from "@/modules/user/user.schema.js";
import type { orderIdType, queryType } from "@/modules/order/order.schema.js";
import type { orderDetailsRaw, orderRaw } from "@/modules/order/order.types.js";

export async function findAll(userId: userIdType, query: queryType): Promise<orderRaw[]> {
  const { rows } = await database.query(
    `
    SELECT 
      o.order_id,
      o.amount,
      o.status,
      o.create_at,

      oi.product_id,
      oi.variant_id,
      oi.quantity,
      oi.unit_price,

      p.title,
      p.slug,

      vo.name,
      vo.value

    FROM orders o
    
    INNER JOIN order_items oi
      ON oi.order_id = o.order_id

    LEFT JOIN products p
      ON oi.product_id = p.product_id

    LEFT JOIN options vo
      ON oi.variant_id = vo.variant_id

    WHERE user_id = $1
    `,
    [userId]
  )
  return rows
}

export async function findById(userId: userIdType, orderId: orderIdType): Promise<orderDetailsRaw[]> {
  const { rows } = await database.query(
    `
    SELECT 
      o.order_id,
      o.amount,
      o.status,
      o.create_at,

      oi.product_id,
      oi.variant_id,
      oi.quantity,
      oi.unit_price,

      p.title,
      p.slug,

      vo.name,
      vo.value,

      v.sku,

      i.first_name,
      i.last_name,
      i.city,
      i.state

    FROM orders o

    LEFT JOIN informations i
      on o.user_id = i.user_id

    INNER JOIN order_items oi
      ON oi.order_id = o.order_id

    LEFT JOIN products p
      ON oi.product_id = p.product_id

    LEFT JOIN variants v
      ON oi.variant_id = v.variant_id

    LEFT JOIN options vo
      ON oi.variant_id = vo.variant_id

    WHERE o.user_id = $1
    AND o.order_id = $2
    `,
    [userId, orderId]
  )
  return rows
}
