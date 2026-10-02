export type productDataRaw = {
  product_id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  brand: string;
  metadata: Record<string, unknown>;
  category: string;

  image_url: string;
  image_alt: string | null;
  is_thumbnail: boolean;

  variant_id: string | null;
  price: number | null;
  comparison_price: number | null;
  stock: number | null;
  sku: string | null;

  option_id: string | null;
  option_name: string | null;
  option_value: string | null;
};

export type productsDataRaw = {
  product_id: string;
  title: string;
  slug: string;
  tags: string[];
  brand: string;
  category: string;
  price: number;
  comparison_price: number;
};