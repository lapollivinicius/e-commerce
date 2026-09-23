import express, { type Request, type Response } from "express";
import { getProducts, getProduct } from "./product.controller.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:slug", getProduct);

export default router;
