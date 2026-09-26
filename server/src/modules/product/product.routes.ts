import express from "express";
import {
  getAllProducts,
  getProduct,
} from "@/modules/product/product.controller.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:slug", getProduct);

export default router;
