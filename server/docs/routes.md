# API ROUTES

**base URL:** ```/api/v1```

---

### AUTH

#### POST ```/auth/register```

to register an user

**no queries**

```json
{
	"message": "User was registed",
	"success": true,
	"error": null
}
```

#### POST ```/auth/login```

to login app

**no queries**

```json
{
	"message": "login successful",
	"success": true,
	"error": null
}
```

#### POST ```/auth/logout```

to logout app

**no queries**

```json
{
	"message": "logout successful",
	"success": true,
	"error": null
}
```
---

### CART

#### GET ```/carts```

**no queries**

to get cart items by user

```json
{
	"data": [
		{
			"variant_id": "",
			"title": "",
			"slug": "",
			"brand": "",
			"price": 0,
			"comparison_price": 0,
			"quantity": 0
		}
	],
	"success": true,
	"error": null
}
```


---

### PRODUCTS

#### GET ```/products```

list products

**Query params**
- 'search'
- 'page' 
- 'limit'
- 'category'
- 'featured'
- 'sort'

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
  "error": null,
}
```

#### GET ```/products/:slug```

**no queries**

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
  "error": null,
}
```

---

### CATEGORIES

#### GET ```/categories```

**Query params**
- 'limit'
- 'featured'
- 'sort'

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

#### GET ```/categories/:slug```

**no queries**

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