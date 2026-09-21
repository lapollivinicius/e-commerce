import express, { type Express, type Request, type Response } from "express";
import session from "express-session";
import { sessionConfig } from "./config/session.config.ts";
import Database from "./database/database.ts";

const app: Express = express();
const db = Database.connect();

Database.setup(db)

app.use(session(sessionConfig));

export default app;
