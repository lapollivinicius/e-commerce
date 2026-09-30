import type { Request, Response, NextFunction } from "express";
import { authenticateUser, registerUser } from "@/modules/auth/auth.service.js";
import { getUserById } from "@/modules/user/user.service.js";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await registerUser(req.body);
    res.send({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const user_id = await authenticateUser(req.body);

    req.session.regenerate((err) => {
      if (err) return next(err);
      req.session.user_id = user_id;
      return res.status(200).send({
        message: "login successful",
        success: true,
        error: null,
      });
    });
  } catch (err) {
    next(err);
  }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    req.session.destroy((err) => {
      if (err) return next(err);
      res.clearCookie("connect.sid");
      return res
        .status(200)
        .send({ message: "logout successful", success: true, error: null });
    });
  } catch (err) {
    next(err);
  }
}

export async function getAuthUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await getUserById(req.session.user_id!);
    return res.send({ ...response, success: true, error: null });
  } catch (err) {
    next(err);
  }
}

