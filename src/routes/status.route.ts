import { Router } from "express";
import {
  createStatus,
  deleteStatus,
  getStatusById,
  getStatuses,
  updateStatus,
} from "../controllers/status.controller";
import validate from "../middlewares/validateResource";
import { Params } from "../schemas/params.schema";
import { Status, StatusBase } from "../schemas/status.schema";

const router = Router();

router.post("/", validate(StatusBase, "body"), createStatus);

router.get("/", getStatuses);

router.get("/:id", validate(Params, "params"), getStatusById);

router.put(
  "/:id",
  validate(Params, "params"),
  validate(Status, "body"),
  updateStatus
);

router.delete("/:id", validate(Params, "params"), deleteStatus);

export default router;
