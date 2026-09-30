import express, { type Request, type Response } from "express";
import { getAllOrders } from "@/modules/order/order.controller.js";

const router = express.Router();

router.get("/orders", getAllOrders)

export default router;
