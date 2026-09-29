import express from "express";
import { signUp } from "@/modules/auth/auth.controller.js";

const router = express.Router();

router.post("/auth/signup", signUp);

export default router;
