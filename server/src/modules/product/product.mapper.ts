import type { productDataRaw } from "./product.types.ts";

export function mapProduct(rows: productDataRaw[]) {
  const product = rows[0];

  if(!product) {
    return null
  }

  const variants = new Map();

  for (const row of rows) {
    if (!row.variant_id) continue;

    let variant = variants.get(row.variant_id);

    if (!variant) {
      variant = {
        id: row.variant_id,
        price: row.price,
        comparison_price: row.comparison_price,
        stock: row.stock,
        sku: row.sku,
        height: row.height,
        width: row.width,
        weight: row.weight,
        options: []
      };

      variants.set(row.variant_id, variant);
    }

    if (row.option_id) {
      variant.options.push({
        name: row.option_name,
        value: row.option_value
      });
    }
  }

  return {
    id: product.product_id,
    title: product.title,
    slug: product.slug,
    description: product.description,
    brand: product.brand,
    tags: product.tags,
    metadata: product.metadata,
    category: product.category,
    variants: [...variants.values()]
  };
}