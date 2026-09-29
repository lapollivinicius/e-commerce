# API ROUTES

base URL: /api/v* -> version

### products

#### GET /products

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

#### GET /products/:slug

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

### categories

#### GET /categories

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

#### GET /categories/:slug

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