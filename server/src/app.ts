import express, { type Express } from "express";
import session from "express-session";
import { sessionConfig } from "./config/session.config.ts";
import { setupDatabase } from "./database/database.ts";
import router from "./routes/routes.ts";

const app: Express = express();

app.use(express.json());
app.use(session(sessionConfig));
app.use(router);

export default app;
