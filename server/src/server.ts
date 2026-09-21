import express, { type Express, type Request, type Response } from "express";
import * as path from "node:path";
import session from "express-session";
import pgSession from "connect-pg-simple";
import dotenv from "dotenv";
import Database from "./database/db.js";

// load envs
dotenv.config();

const PgSession = pgSession(session);
const _dirname = process.cwd();
const app: Express = express();
const db = Database.connect();

// setup schemas in db
Database.setup(db)

// config session store via pg-node
app.use(
  session({
    store: new PgSession({
      pool: db,
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
  }),
);

// serving static file from public folder
app.use(express.static(path.join(_dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello!")
})

// default to listen the server
app.listen(3000, () => {
  console.log("server running: http://localhost:3000");
});
