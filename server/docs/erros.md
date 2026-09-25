# API ERRORS CODE 

## responses

| HTTP | `success` | error code               | description                                        |
|------|-----------|--------------------------|----------------------------------------------------|
| 404  |  `false`  | `PRODUCT_NOT_FOUND`      | it was requested and it was not found              |
| 404  |  `false`  | `PRODUCTS_NOT_FOUND`     | no products were found                             |
| 400  |  `false`  | `INVALID_PRODUCT_DATA`   | provided product data is invalid                   |
| 400  |  `false`  | `INVALID_QUERY`          | provided query parameters are invalid.             |
| 401  |  `false`  | `UNAUTHORIZED`           | authentication is required                         |
| 403  |  `false`  | `FORBIDDEN`              | authenticated user does not have permission        |
| 409  |  `false`  | `PRODUCT_ALREADY_EXISTS` | a product with the same identifier already exists  |
| 500  |  `false`  | `INTERNAL_SERVER_ERROR`  | server error occurred                              |
