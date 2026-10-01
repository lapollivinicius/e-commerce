import type { orderType } from "./order.schema.ts";
import type { orderDetailsRaw, orderRaw } from "./order.types.ts";

export function mapOrders(rows: orderRaw[]): orderType[] {
  const ordersMap = new Map<string, orderType>();

  for (const row of rows) {
    let order = ordersMap.get(row.order_id);

    if (!order) {
      order = {
        order_id: row.order_id,
        amount: row.amount,
        status: row.status,
        created_at: row.create_at,
        items: [],
      };

      ordersMap.set(row.order_id, order);
    }

    let item = order.items.find(
      (item) => item.variant_id === row.variant_id,
    );

    if (!item) {
      item = {
        product_id: row.product_id,
        variant_id: row.variant_id,
        title: row.title,
        slug: row.slug,
        quantity: row.quantity,
        unit_price: row.unit_price,
        options: [],
      };

      order.items.push(item);
    }

    if (row.name && row.value) {
      item.options.push({
        name: row.name,
        value: row.value,
      });
    }
  }

  return Array.from(ordersMap.values());
}

export function mapOrderDetails(rows: orderDetailsRaw[]) {
  const first = rows.at(0);

  if (!first) return null;

  const itemsMap = new Map();

  for (const row of rows) {
    let item = itemsMap.get(row.variant_id);

    if (!item) {
      item = {
        product_id: row.product_id,
        variant_id: row.variant_id,
        quantity: row.quantity,
        unit_price: row.unit_price,
        title: row.title,
        slug: row.slug,
        sku: row.sku,
        options: [],
      };

      itemsMap.set(row.variant_id, item);
    }

    if (row.name && row.value) {
      item.options.push({
        name: row.name,
        value: row.value,
      });
    }
  }

  return {
    order_id: first.order_id,
    amount: first.amount,
    status: first.status,
    created_at: first.create_at,
    first_name: first.first_name,
    last_name: first.last_name,
    city: first.city,
    state: first.state,
    items: Array.from(itemsMap.values()),
  };
}