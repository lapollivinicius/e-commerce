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
  }
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
  }
}
```