import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/api/v1", (req: Request, res: Response) => {
  res.json({ msg: "welcome, curious guy!" });
});

// router.use("/api/v1", moduleRoutes)

export default router;
