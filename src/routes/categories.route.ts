import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/categories.controller";
import validate from "../middlewares/validateResource";
import { Category } from "../schemas/category.schema";
import { Params } from "../schemas/params.schema";

const router = Router();

router.post("/", validate(Category, "body"), createCategory);

router.get("/", getCategories);

router.get("/:id", validate(Params, "params"), getCategoryById);

router.put(
  "/:id",
  validate(Params, "params"),
  validate(Category, "body"),
  updateCategory
);

router.delete("/:id", validate(Params, "params"), deleteCategory);

export default router;
