import { ErrorHandler } from "@/helpers/error.js";
import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

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

  if (err instanceof ZodError) {
    console.log(err)
    return res.status(400).json({
      success: false,
      error: {
        code: "INVALID__DATA",
        message: err.issues[0]!.message
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
