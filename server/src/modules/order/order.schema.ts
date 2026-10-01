import * as z from "zod";

export const querySchema = z.object({
  sort: z.string().optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().positive().optional(),
});

export const orderSchema = z.object({
  order_id: z.uuid(),
  amount: z.int().positive(),
  status: z.string(),
  created_at: z.date(),
  items: z.array(
    z.object({
      product_id: z.uuid(),
      variant_id: z.uuid(),
      title: z.string(),
      slug: z.string(),
      quantity: z.int().positive(),
      unit_price: z.int().positive(),
      options: z.array(
        z.object({
          name: z.string(),
          value: z.string(),
        }),
      ),
    }),
  ),
});

export const orderDetailsSchema = z.object({
  order_id: z.uuid(),
  amount: z.int().positive(),
  status: z.string(),
  created_at: z.date(),
  first_name: z.string(),
  last_name: z.string(),
  city: z.string(),
  state: z.string(),
  items: z.array(
    z.object({
      product_id: z.uuid(),
      variant_id: z.uuid(),
      title: z.string(),
      slug: z.string(),
      sku: z.string(),
      quantity: z.int().positive(),
      unit_price: z.int().positive(),
      options: z.array(
        z.object({
          name: z.string(),
          value: z.string(),
        }),
      ),
    }),
  ),
});

export const ordersSchema = z.array(orderSchema);

export const orderIdSchema = z.uuid();

export const listOrdersSchema = z.object({
  data: ordersSchema,
  pagination: z.object({
    page: z.int().positive(),
    limit: z.int().positive(),
    total: z.int().positive(),
  }),
});

export type queryType = z.infer<typeof querySchema>;
export type orderType = z.infer<typeof orderSchema>;
export type orderDetailsType = z.infer<typeof orderDetailsSchema>
export type ordersType = z.infer<typeof ordersSchema>;
export type orderIdType = z.infer<typeof orderIdSchema>;
export type listOrdersType = z.infer<typeof listOrdersSchema>;
