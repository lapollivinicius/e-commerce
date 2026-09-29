import express, { type Request, type Response } from "express";
import { getCartItems } from "@/modules/cart/cart.controller.js";
import { authMiddleware } from "@/middlewares/auth.middleware.js";

const router = express.Router();

router.get("/carts", authMiddleware, getCartItems);

export default router;
