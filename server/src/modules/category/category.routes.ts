import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/category", (req: Request, res: Response) => {
  res.json({ msg: "category" });
});

export default router;
