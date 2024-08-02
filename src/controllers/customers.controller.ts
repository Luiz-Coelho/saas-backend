import { Request, Response } from "express";
import { CustomerModel } from "../model/customer.model";
import { Customer, CustomerWithId } from "../schemas/customer.schema";
import stringContains from "../services/stringContains";
import arrayContains from "../services/arrayContains";
import { Params } from "../schemas/params.schema";

export async function createCustomer(
  req: Request<{}, {}, Customer>,
  res: Response
) {
  try {
    const customer = await CustomerModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Customer created sucessfully", customer });
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function getCustomers(req: Request, res: Response) {
  try {
    const query = req.query;
    query.email && stringContains(query.email);
    query.name && stringContains(query.name);
    query.address && stringContains(query.address);
    query.track && arrayContains(query.track);
    query.category && arrayContains(query.category);
    query.status && arrayContains(query.status);
    const customers = await CustomerModel.find(query)
      .populate("category", "name")
      .populate("track", "name");
    return res.status(200).send(customers);
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function getCustomerById(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const customer = await CustomerModel.findById(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    return res.status(200).send(customer);
  } catch (error) {
    return res.status(500).send(error);
  }
}
export async function updateCustomer(
  req: Request<Params, {}, CustomerWithId>,
  res: Response
) {
  try {
    const { id } = req.params;
    const customer = await CustomerModel.findById(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    return res
      .status(200)
      .json({ message: "Customer updated sucessfully", updatedCustomer });
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function deleteCustomer(req: Request<Params>, res: Response) {
  try {
    const { id } = req.params;
    const customer = await CustomerModel.findById(id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    const deletedCustomer = await CustomerModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Customer deleted sucessfully", deletedCustomer });
  } catch (error) {
    return res.status(500).send(error);
  }
}
