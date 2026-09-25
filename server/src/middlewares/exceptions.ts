import type { ErrorRequestHandler } from "express";

export const exceptionHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  return res.status(400).json({
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "an exception occurred",
    },
  });
};