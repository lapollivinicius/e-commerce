import { ErrorHandler } from "@/helpers/error.js";
import { logger } from "@/helpers/logger.js";
import type {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import { ZodError } from "zod";

export const requestError: ErrorRequestHandler = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ErrorHandler) {
    logger.error(err.message)
    return res.status(err.statusCode).json({
      success: false,
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }

  if (err instanceof ZodError) {
    logger.error(err.issues[0]!.message)
    return res.status(400).json({
      success: false,
      error: {
        code: "INVALID__DATA",
        message: err.issues[0]!.message,
      },
    });
  }
  logger.error("an exception occurred")
  return res.status(400).json({
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "an exception occurred",
    },
  });
};
