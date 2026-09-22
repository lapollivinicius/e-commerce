import express, { type Request, type Response } from "express";
import { getProducts } from "./product.controller.js";

const router = express.Router();

router.get("/products", getProducts);

export default router;
