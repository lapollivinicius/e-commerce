import express from "express";
import productRoutes from "@/modules/product/product.routes.js";
import categoryRoutes from "@/modules/category/category.routes.js";
import authRoutes from "@/modules/auth/auth.routes.js"
import cartRoutes from "@/modules/cart/cart.routes.js"

const router = express.Router();

router.use("/api/v1", productRoutes);
router.use("/api/v1", categoryRoutes)
router.use("/api/v1", authRoutes)
router.use("/api/v1", cartRoutes)

export default router;
