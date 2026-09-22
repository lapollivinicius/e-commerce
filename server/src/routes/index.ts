import express, { type Request, type Response } from "express";
import productRoutes from "@/modules/product/product.routes.js"

const router = express.Router();

router.get("/api/v1", (req: Request, res: Response) => {
  res.json({ msg: "welcome, curious guy!" });
});

router.use("/api/v1", productRoutes)

export default router;
