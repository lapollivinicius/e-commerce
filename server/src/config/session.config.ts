import session from "express-session";
import pgSession from "connect-pg-simple";
import { connectDatabase } from "../database/database.js";

const PgSession = pgSession(session);

export const sessionConfig: session.SessionOptions = {
  store: new PgSession({
    pool: connectDatabase(),
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
};
