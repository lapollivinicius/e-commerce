import express from "express";
import { login, logout, register } from "@/modules/auth/auth.controller.js";
import { authMiddleware } from "@/middlewares/auth.middleware.js";

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login)
router.post("/auth/logout", authMiddleware, logout)

export default router;
