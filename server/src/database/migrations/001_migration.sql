CREATE TABLE IF NOT EXISTS categories (
    category_id UUID PRIMARY KEY,
    category TEXT NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS products (
    product_id UUID PRIMARY KEY,
    category_id UUID NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    brand TEXT NOT NULL,
    tags TEXT [],
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    create_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY (category_id) REFERENCES categories (category_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS variants (
    variant_id UUID PRIMARY KEY,
    product_id UUID NOT NULL,
    price INTEGER NOT NULL,
    comparison_price INTEGER,
    stock INTEGER NOT NULL,
    sku TEXT,
    height INTEGER,
    width INTEGER,
    length INTEGER,
    weight INTEGER,
    FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS options (
    option_id UUID PRIMARY KEY,
    variant_id UUID NOT NULL,
    name TEXT NOT NULL,
    value TEXT NOT NULL,
    FOREIGN KEY (variant_id) REFERENCES variants (variant_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS images (
    image_id UUID PRIMARY KEY,
    product_id UUID NOT NULL,
    url TEXT NOT NULL,
    alt TEXT,
    FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS users (
    user_id UUID PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    create_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS addresses (
    address_id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    name TEXT,
    recipient TEXT NOT NULL,
    street TEXT NOT NULL,
    number TEXT NOT NULL,
    complement TEXT,
    neighborhood TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    country TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS carts (
    cart_id UUID PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE,
    create_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cart_items (
    cart_item_id UUID PRIMARY KEY,
    cart_id UUID NOT NULL,
    variant_id UUID NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY (cart_id) REFERENCES carts (cart_id) ON DELETE CASCADE,
    FOREIGN KEY (variant_id) REFERENCES variants (variant_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS orders (
    order_id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    address_id UUID NOT NULL,
    amount INTEGER NOT NULL,
    status TEXT NOT NULL,
    create_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    update_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (address_id) REFERENCES addresses (address_id)
);

CREATE TABLE IF NOT EXISTS order_items (
    order_item_id UUID PRIMARY KEY,
    order_id UUID NOT NULL,
    product_id UUID NOT NULL,
    variant_id UUID NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    unit_price INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (product_id),
    FOREIGN KEY (variant_id) REFERENCES variants (variant_id)
);