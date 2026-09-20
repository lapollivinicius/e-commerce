import express, { type Express, type Request, type Response } from 'express';
import * as path from "node:path";
import session from "express-session";
import pgSession from "connect-pg-simple";
import dotenv from "dotenv";
import { pool } from "./lib/db.js";

// load envs 
dotenv.config();

const PgSession = pgSession(session);
const _dirname = process.cwd();
const app: Express = express();

// config session store via pg-node
app.use(
  session({
    store: new PgSession({
      pool,
    }),

    secret: process.env.SESSION_SECRET!,

    resave: false,
    saveUninitialized: false,

    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// serving static file from public folder
app.use(express.static(path.join(_dirname, "public")));

// default to listen the server
app.listen(3000, () => {
  console.log("server running: http://localhost:3000");
});