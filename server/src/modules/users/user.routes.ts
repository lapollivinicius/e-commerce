import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/users", (req: Request, res: Response) => {
  res.json({ msg: "users" });
});

export default router;
