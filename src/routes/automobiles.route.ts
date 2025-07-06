import { Router } from "express";
import {
  createAutomobile,
  deleteAutomobile,
  getAutomobileById,
  getAutomobiles,
  updateAutomobile,
} from "../controllers/automobiles.controller";
import validate from "../middlewares/validateResource";
import { Automobile, AutomobileBase } from "../schemas/automobile.schema";
import { Params } from "../schemas/params.schema";

const router = Router();

router.post("/", validate(AutomobileBase, "body"), createAutomobile);

router.get("/", getAutomobiles);

router.get("/:id", validate(Params, "params"), getAutomobileById);

router.put(
  "/:id",
  validate(Params, "params"),
  validate(Automobile, "body"),
  updateAutomobile
);

router.delete("/:id", validate(Params, "params"), deleteAutomobile);

export default router;
