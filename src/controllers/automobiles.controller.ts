import { Request, Response } from "express";
import { AutomobileModel } from "../model/automobile.model";
import { Automobile, AutomobileBase } from "../schemas/automobile.schema";
import { Params } from "../schemas/params.schema";
import handleError from "../services/handleError";

export async function createAutomobile(
  req: Request<{}, {}, AutomobileBase>,
  res: Response
) {
  try {
    const automobile = await AutomobileModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Automobile created sucessfully", automobile });
  } catch (error) {
    handleError(res, error, "licensePlate");
  }
}

export async function getAutomobiles(req: Request, res: Response) {
  try {
    const automobiles = await AutomobileModel.find({});
    return res.status(200).send(automobiles);
  } catch (error) {
    handleError(res, error);
  }
}

export async function getAutomobileById(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const automobile = await AutomobileModel.findById(id);
    if (!automobile) {
      return res.status(404).json({ message: "Automobile not found" });
    }
    return res.status(200).send(automobile);
  } catch (error) {
    handleError(res, error);
  }
}

export async function updateAutomobile(
  req: Request<Params, {}, Automobile>,
  res: Response
) {
  try {
    const { id } = req.params;
    const automobile = await AutomobileModel.findById(id);
    if (!automobile) {
      return res.status(404).json({ message: "Automobile not found" });
    }
    const updatedAutomobile = await AutomobileModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Automobile updated sucessfully", updatedAutomobile });
  } catch (error) {
    handleError(res, error);
  }
}

export async function deleteAutomobile(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const automobile = await AutomobileModel.findById(id);
    if (!automobile) {
      return res.status(404).json({ message: "Automobile not found" });
    }
    const deletedAutomobile = await AutomobileModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Automobile deleted successfully", deletedAutomobile });
  } catch (error) {
    handleError(res, error);
  }
}
