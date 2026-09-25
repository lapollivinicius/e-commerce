import express, { type Express } from "express";
import { sessionConfig } from "@/config/session.config.js";
import { errorHandler } from "@/middlewares/error.js";
import session from "express-session";
import router from "@/routes/index.js";

const app: Express = express();

app.use(express.json({ limit: "1mb" }));
app.use(session(sessionConfig));
app.use(router);
app.use(errorHandler);

export default app;
