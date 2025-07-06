import { Request, Response } from "express";
import { Params } from "../schemas/params.schema";
import handleError from "../services/handleError";
import { Status, StatusBase } from "../schemas/status.schema";
import { StatusModel } from "../model/status.model";

export async function createStatus(
  req: Request<{}, {}, StatusBase>,
  res: Response
) {
  try {
    const status = await StatusModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Status created sucessfully", status });
  } catch (error) {
    handleError(res, error, "status");
  }
}

export async function getStatuses(req: Request, res: Response) {
  try {
    const statuses = await StatusModel.find({});
    return res.status(200).send(statuses);
  } catch (error) {
    handleError(res, error);
  }
}

export async function getStatusById(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const status = await StatusModel.findById(id);
    if (!status) {
      return res.status(404).json({ message: "Status not found" });
    }
    return res.status(200).send(status);
  } catch (error) {
    handleError(res, error);
  }
}

export async function updateStatus(
  req: Request<Params, {}, Status>,
  res: Response
) {
  try {
    const { id } = req.params;
    const status = await StatusModel.findById(id);
    if (!status) {
      return res.status(404).json({ message: "Status not found" });
    }
    const updatedStatus = await StatusModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "Status updated sucessfully", updatedStatus });
  } catch (error) {
    handleError(res, error);
  }
}

export async function deleteStatus(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const status = await StatusModel.findById(id);
    if (!status) {
      return res.status(404).json({ message: "Status not found" });
    }
    const deletedStatus = await StatusModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Status deleted successfully", deletedStatus });
  } catch (error) {
    handleError(res, error);
  }
}
