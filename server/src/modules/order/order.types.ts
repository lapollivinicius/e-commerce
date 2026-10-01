import type { UUID } from "node:crypto";

export type orderRaw = {
  order_id: UUID;
  amount: number;
  status: string;
  create_at: Date;
  product_id: UUID;
  variant_id: UUID;
  quantity: number;
  unit_price: number;
  title: string;
  slug: string;
  name: string;
  value: string;
};

export type orderDetailsRaw = {
  order_id: UUID;
  amount: number;
  status: string;
  create_at: Date;
  product_id: UUID;
  variant_id: UUID;
  quantity: number;
  unit_price: number;
  title: string;
  slug: string;
  name: string;
  value: string;
  sku: string;
  first_name: string;
  last_name: string;
  city: string;
  state: string;
};
