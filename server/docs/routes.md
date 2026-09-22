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
      "category": "",
      "brand": ""
    }
  ],
  "pagination": {
    "page": 0,
    "limit": 0,
    "total": 0
  },
  "sucess": [true || false],
  "error": ["" || null]
}
```