import express from "express";
import { getAllCategories, getCategory } from "@/modules/category/category.controller.js";

const router = express.Router();

router.get("/categories", getAllCategories);
router.get("/categories/:slug", getCategory);

export default router;
