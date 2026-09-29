import express from "express";
import productRoutes from "@/modules/product/product.routes.js";
import categoryRoutes from "@/modules/category/category.routes.js";

const router = express.Router();

router.use("/api/v1", productRoutes);
router.use("/api/v1", categoryRoutes)

export default router;
