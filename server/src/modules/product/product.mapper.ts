import type { productDataRaw } from "@/modules/product/product.types.js";

export function mapProduct(rows: productDataRaw[]) {
  if (rows.length === 0) {
    return null;
  }

  const first = rows[0];

  if(!first) return null

  const images = new Map<
    string,
    {
      url: string;
      alt: string | null;
      is_thumbnail: boolean;
    }
  >();

  const variants = new Map<
    string,
    {
      variant_id: string;
      price: number;
      comparison_price: number | null;
      stock: number;
      sku: string;
      options: {
        option_id: string;
        name: string;
        value: string;
      }[];
    }
  >();

  for (const row of rows) {
    if (!images.has(row.image_url)) {
      images.set(row.image_url, {
        url: row.image_url,
        alt: row.image_alt,
        is_thumbnail: row.is_thumbnail,
      });
    }

    if (row.variant_id && !variants.has(row.variant_id)) {
      variants.set(row.variant_id, {
        variant_id: row.variant_id,
        price: row.price!,
        comparison_price: row.comparison_price,
        stock: row.stock!,
        sku: row.sku!,
        options: [],
      });
    }

    if (row.variant_id && row.option_id) {
      const variant = variants.get(row.variant_id)!;
      const alreadyExists = variant.options.some(
        (option) => option.option_id === row.option_id,
      );

      if (!alreadyExists) {
        variant.options.push({
          option_id: row.option_id,
          name: row.option_name!,
          value: row.option_value!,
        });
      }
    }
  }

  return {
    product_id: first.product_id,
    title: first.title,
    slug: first.slug,
    description: first.description,
    tags: first.tags,
    brand: first.brand,
    metadata: first.metadata,
    category: first.category,
    images: [...images.values()],
    variants: [...variants.values()],
  };
}
