import { ErrorHandler } from "@/helpers/error.js";
import type { ErrorRequestHandler } from "express";

export const requestError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    return res.status(err.statusCode).json({
      success: false,
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }

  return res.status(400).json({
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "an exception occurred",
    },
  });
};
