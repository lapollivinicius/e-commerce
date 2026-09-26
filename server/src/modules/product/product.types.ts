export type productDataRaw = {
  product_id: string;
  title: string;
  slug: string;
  description: string;
  brand: string;
  tags: string[];
  metadata: object;
  category: string;
  variant_id: string;
  price: number;
  comparison_price: number;
  stock: number;
  sku: string;
  height: string;
  width: string;
  length: string;
  weight: string;
  option_id: string;
  option_name: string;
  option_value: string;
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