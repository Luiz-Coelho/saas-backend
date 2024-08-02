import { Router } from "express";
import {
  createAutomobile,
  deleteAutomobile,
  getAutomobileById,
  getAutomobiles,
  updateAutomobile,
} from "../controllers/automobiles.controller";
import validate from "../middlewares/validateResource";
import { Automobile } from "../schemas/automobile.schema";

const router = Router();

router.post("/", validate(Automobile, "body"), createAutomobile);

router.get("/", getAutomobiles);

router.get("/:id", validate(Automobile, "params"), getAutomobileById);

router.put(
  "/:id",
  validate(Automobile, "params"),
  validate(Automobile, "body"),
  updateAutomobile
);

router.delete("/:id", validate(Automobile, "params"), deleteAutomobile);

export default router;
