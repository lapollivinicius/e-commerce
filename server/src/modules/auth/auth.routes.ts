import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/auth", (req: Request, res: Response) => {
  res.json({ msg: "auth" });
});

export default router;
