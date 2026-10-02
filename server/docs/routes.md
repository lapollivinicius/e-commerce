# API ROUTES

**base URL:** `/api/v1`

---

## AUTH

### POST `/auth/register`

to register an user

**no queries**

_BODY_

```json
{
  "email": "",
  "password": "",
  "confirm_password": ""
}
```

_RESPONSE_

```json
{
  "message": "User was registed",
  "success": true,
  "error": null
}
```

### POST `/auth/login`

to login app

**no queries**

_BODY_

```json
{
  "email": "",
  "password": ""
}
```

_RESPONSE_

```json
{
  "message": "login successful",
  "success": true,
  "error": null
}
```

### POST `/auth/logout`

to logout app

**no queries**

_RESPONSE_

```json
{
  "message": "logout successful",
  "success": true,
  "error": null
}
```

### GET ```/auth/me```

to get user data 

**no queries**

_RESPONSE_

```json
{
	"data": {
		"user_id": "",
		"email": "",
		"password": "",
		"is_admin": false,
		"is_active": true,
		"create_at": "",
		"update_at": ""
	},
	"success": true,
	"error": null
}
```

---

## PRODUCTS

### GET `/products`

to list all products

**Query params**

- 'search'
- 'page'
- 'limit'
- 'category'
- 'sort'

_RESPONSE_

```json
{
  "data": [
    {
      "product_id": "",
      "title": "",
      "slug": "",
      "price": 0,
      "comparison_price": 0,
      "tags": ["", ""],
      "brand": "",
      "category": ""
    }
  ],
  "pagination": {
    "page": 0,
    "limit": 0,
    "total": 0,
    "sort": ""
  },
  "success": true,
  "error": null
}
```

### GET `/products/:slug`

to get product detailed using slug

**no queries**

_RESPONSE_

```json
{
  "data": {
    "product_id": "",
    "title": "",
    "slug": "",
    "description": "",
    "brand": "",
    "tags": [""],
    "metadata": {},
    "category": "",
    "variants": [
      {
        "variant_id": "",
        "price": 0,
        "comparison_price": 0,
        "stock": 0,
        "sku": "",
        "height": 0,
        "width": 0,
        "length": 0,
        "weight": 0,
        "options": [
          {
            "name": "",
            "value": ""
          }
        ]
      }
    ]
  },
  "success": true,
  "error": null
}
```

---

## CATEGORIES

### GET `/categories`

to get all categories

**Query params**

- 'limit'
- 'sort'

_RESPONSE_

```json
{
  "data": [
    {
      "category": "",
      "thumbnail": "",
      "slug": ""
    }
  ],
  "pagination": {
    "limit": 0,
    "featured" false,
    "sort": ""
  },
  "success": true,
  "error": null,
}
```

### GET `/categories/:slug`

to get category using slug

**no queries**

_RESPONSE_

```json
{
  "data": [
    {
      "category_id": "",
      "category": "",
      "slug": "",
      "thumbnail": "",
      "description": ""
    }
  ],
  "success": true,
  "error": null
}
```

## ORDERS

### GET `/orders`

to get all orders (user need to be authenticated)

**queries**

- 'sort'
- 'search'
- 'page'
- 'limit'

_RESPONSE_

```json
{
  "data": [
    {
      "order_id": "",
      "amount": 0,
      "status": "",
      "created_at": "",
      "items": [
        {
          "product_id": "",
          "variant_id": "",
          "title": "",
          "slug": "",
          "quantity": 0,
          "unit_price": 0,
          "options": [
            {
              "name": "",
              "value": ""
            }
          ]
        }
      ]
    }
  ],
  "pagination": {
    "page": 0,
    "limit": 0,
    "total": 0
  },
  "success": true,
  "error": null
}
```

### GET `/orders/:order_id`

to get an order (user need to be authenticated)

**no queries**

_RESPONSE_

```json
{
  "data": {
    "order_id": "",
    "amount": 0,
    "status": "",
    "created_at": "",
    "first_name": "",
    "last_name": "",
    "city": "",
    "state": "",
    "items": [
      {
        "product_id": "",
        "variant_id": "",
        "title": "",
        "slug": "",
        "sku": "",
        "quantity": 0,
        "unit_price": 0,
        "options": [
          {
            "name": "",
            "value": ""
          }
        ]
      }
    ]
  },
  "success": true,
  "error": null
}
```
