# E-commerce Server

The server-side application for the e-commerce project. It is built with **Express** and **TypeScript**, organized into domain modules, and uses **PostgreSQL** for persistent data.

## Architecture

The code follows a modular, layered structure. Each feature is grouped by domain (such as products, orders, and authentication), with responsibilities separated across layers:

- **Routes** define the HTTP endpoints.
- **Controllers** handle HTTP requests and responses.
- **Services** contain application and business logic.
- **Repositories** handle database access.
- **Schemas** validate incoming data.

Shared middleware, configuration, helpers, and database setup live outside the feature modules. The application is assembled in `src/app.ts`, while `src/server.ts` initializes the database and starts the HTTP server.

## Project organization

```text
src/
├── config/       # Application configuration
├── database/     # PostgreSQL connection, migrations, and seeds
├── helpers/      # Shared utilities
├── middlewares/  # Shared Express middleware
├── modules/      # Domain features and their layers
└── routes/       # API route composition
docs/             # API and error documentation
```

## Documentation

- [API routes](docs/routes.md)
- [API error responses](docs/erros.md)

More documentation will be added here as the project evolves.

## Modules

The API is mounted under `/api/v1`. Current domain modules include:

- **Auth**: user registration and login, session logout, and the authenticated user's profile (`/auth/register`, `/auth/login`, `/auth/logout`, `/auth/me`).
- **Users**: user data and persistence used by authentication and profile lookup.
- **Products**: list products and retrieve a product by its slug. The list accepts query parameters for filtering and pagination.
- **Categories**: list categories and retrieve a category by its slug.
- **Orders**: list the current user's orders and retrieve one of their orders by ID. Both endpoints require authentication.
- **Payments**: currently a placeholder endpoint; payment processing is not implemented yet.

Each implemented domain keeps its HTTP routes and controller separate from service logic, validation schemas, and database repositories. The user module currently provides repository/service functionality; its route is not mounted in the API router.

## Usage and authentication flow

1. Register an account with `POST /api/v1/auth/register`.
2. Log in with `POST /api/v1/auth/login`. The server verifies the password and creates a session, returned to the client as an HTTP-only cookie.
3. Send that cookie with subsequent requests. `GET /api/v1/auth/me` returns the authenticated user's profile.
4. Access protected order endpoints (`GET /api/v1/orders` and `GET /api/v1/orders/:order_id`) with the same session cookie. The authentication middleware checks the session before the request reaches the controller.
5. Log out with `POST /api/v1/auth/logout`; the session is destroyed and the session cookie is cleared.

Sessions are stored in PostgreSQL. Product and category endpoints are currently public. Session cookies use `httpOnly`, `sameSite: "lax"`, and a seven-day lifetime; the `secure` flag is enabled in production.

## Environment variables

Create a `.env` file in the server directory before starting the application. Keep real credentials private and do not commit this file.

```env
PORT=3000
NODE_ENV=development
SESSION_SECRET=replace-with-a-long-random-secret

DATABASE_URL=postgresql://app_user:app_password@localhost:5432/ecommerce

# Used by docker-compose to configure the PostgreSQL container
DATABASE_USERNAME=app_user
DATABASE_PASSWORD=app_password
DATABASE=ecommerce
DATABASE_PORT=5432
```

`DATABASE_URL` is used by the server's PostgreSQL connection pool. The `DATABASE_*` settings configure the PostgreSQL container in `docker-compose.yml`; use matching credentials and database name in `DATABASE_URL`. `PORT` selects the HTTP port and defaults to `3000`. `NODE_ENV=production` enables secure session cookies, which require HTTPS. `SESSION_SECRET` is required for signing session cookies.

To start the database locally with Docker Compose, run `docker compose up -d postgres`, then start the server with `npm run dev`. On startup, the server runs the database setup before accepting requests.

## Required account data

Registration (`POST /api/v1/auth/register`) currently requires an email and password in the JSON request body:

```json
{
  "email": "user@example.com",
  "password": "your-password"
}
```

Login (`POST /api/v1/auth/login`) uses the same fields. Passwords are hashed before they are stored. See the [API routes documentation](docs/routes.md) for endpoint details and response examples.
