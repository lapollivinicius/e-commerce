import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/products", (req: Request, res: Response) => {
  res.json({ msg: "products" });
});

export default router;
