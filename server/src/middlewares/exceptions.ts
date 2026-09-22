import type { Response } from "express";

export function exceptionHandler(
  err: unknown,
  res: Response,
) {
  return res.status(400).json({
    success: false,
    error: {
      code: "EXCEPTION",
      message: "an exception occurred",
    },
  });
}
