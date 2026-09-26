import express from "express";
import productRoutes from "@/modules/product/product.routes.js"

const router = express.Router();

router.use("/api/v1", productRoutes)

export default router;
