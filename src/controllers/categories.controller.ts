import { Request, Response } from "express";
import { Category } from "../schemas/category.schema";
import { CategoryModel } from "../model/category.model";
import { Params } from "../schemas/params.schema";

export async function createCategory(
  req: Request<{}, {}, Category>,
  res: Response
) {
  try {
    const category = await CategoryModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Category created sucessfully", category });
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function getCategories(req: Request, res: Response) {
  try {
    const categories = await CategoryModel.find({})
      .populate("track", "name")
      .populate("customer", "name");
    return res.status(200).send(categories);
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function getCategoryById(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).send(category);
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function updateCategory(
  req: Request<Params, {}, Category>,
  res: Response
) {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Category updated successfully", updatedCategory });
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function deleteCategory(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const deletedCategory = await CategoryModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Category deleted successfully", deletedCategory });
  } catch (error) {
    return res.status(500).send(error);
  }
}
