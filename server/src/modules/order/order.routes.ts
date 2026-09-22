import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/orders", (req: Request, res: Response) => {
  res.json({ msg: "orders" });
});

export default router;
