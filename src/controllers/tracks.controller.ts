import { Request, Response } from "express";
import { Track, TrackBase } from "../schemas/track.schema";
import { Params } from "../schemas/params.schema";
import { TrackModel } from "../model/track.model";
import handleError from "../services/handleError";

export async function createTrack(
  req: Request<{}, {}, TrackBase>,
  res: Response
) {
  try {
    const track = await TrackModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Track created sucessfully", track });
  } catch (error) {
    handleError(res, error);
  }
}

export async function getTracks(req: Request, res: Response) {
  try {
    const tracks = await TrackModel.find({})
      .populate("category", "name")
      .populate("customer", "name");
    return res.status(200).send(tracks);
  } catch (error) {
    handleError(res, error);
  }
}

export async function getTrackById(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const track = await TrackModel.findById(id);
    if (!track) {
      return res.status(404).send("Track not found");
    }
    return res.status(200).send(track);
  } catch (error) {
    handleError(res, error);
  }
}

export async function updateTrack(
  req: Request<Params, {}, Track>,
  res: Response
) {
  try {
    const { id } = req.params;
    const track = await TrackModel.findById(id);
    if (!track) {
      return res.status(404).send("Track not found");
    }
    const updatedTrack = await TrackModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "Track updated successfully", updatedTrack });
  } catch (error) {
    handleError(res, error);
  }
}

export async function deleteTrack(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const track = await TrackModel.findById(id);
    if (!track) {
      return res.status(404).send("Track not found");
    }
    const deletedTrack = await TrackModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Track deleted successfully", deletedTrack });
  } catch (error) {
    handleError(res, error);
  }
}
