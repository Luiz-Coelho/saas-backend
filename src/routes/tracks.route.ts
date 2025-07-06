import { Router } from "express";
import {
  createTrack,
  deleteTrack,
  getTrackById,
  getTracks,
  updateTrack,
} from "../controllers/tracks.controller";
import validate from "../middlewares/validateResource";
import { Params } from "../schemas/params.schema";
import { Track, TrackBase } from "../schemas/track.schema";

const router = Router();

router.post("/", validate(TrackBase, "body"), createTrack);

router.get("/", getTracks);

router.get("/:id", validate(Params, "params"), getTrackById);

router.put(
  "/:id",
  validate(Params, "params"),
  validate(Track, "body"),
  updateTrack
);

router.delete("/:id", validate(Params, "params"), deleteTrack);

export default router;
