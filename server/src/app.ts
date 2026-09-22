import express, { type Express } from "express";
import session from "express-session";
import { sessionConfig } from "@/config/session.config.js";
import router from "@/routes/index.js";

const app: Express = express();

app.use(express.json());
app.use(session(sessionConfig));
app.use(router);

export default app;
