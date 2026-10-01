import { ErrorHandler } from "@/helpers/error.js";
import type { NextFunction, Request, Response } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.session.user_id) {
    throw new ErrorHandler("Authentication required", 401, "UNAUTHORIZED");
  }
  
  next();
};
