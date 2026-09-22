import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/carts", (req: Request, res: Response) => {
  res.json({ msg: "carts" });
});

export default router;
