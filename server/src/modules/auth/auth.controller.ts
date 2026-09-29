import type { Request, Response, NextFunction } from "express";
import { registerUser } from "./auth.service.ts";

export async function signUp(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await registerUser(req.body)
    res.send({...response, success: true, error: null})
  } catch(err) {
    next(err)
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  // login
}

export async function logout(req: Request, res: Response, next: NextFunction) {
  // logout
}

export async function reset(req: Request, res: Response, next: NextFunction) {
  // reset-password
}