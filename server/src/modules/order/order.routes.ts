import express from "express";
import { getAllOrders, getOrder } from "@/modules/order/order.controller.js";
import { authMiddleware } from "@/middlewares/auth.middleware.js";

const router = express.Router();

router.get("/orders", authMiddleware, getAllOrders)
router.get("/orders/:order_id", authMiddleware, getOrder)

export default router;
