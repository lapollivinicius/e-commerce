import express, { type Express } from "express";
import { sessionConfig } from "@/config/session.config.js";
import { requestError } from "@/middlewares/error.middleware.js";
import { requestLogger } from "@/middlewares/logger.middleware.js";
import session from "express-session";
import router from "@/routes/index.js";

const app: Express = express();

app.use(express.json({ limit: "1mb" }));
app.use(session(sessionConfig));
app.use(requestLogger);
app.use(router);
app.use(requestError);

export default app;
