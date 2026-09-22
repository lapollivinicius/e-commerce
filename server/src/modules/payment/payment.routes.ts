import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/payments", (req: Request, res: Response) => {
  res.json({ msg: "payments" });
});

export default router;
