import { Request, Response } from "express";
import { CustomerModel } from "../model/customer.model";
import { Customer } from "../schemas/customer.schema";

export async function createCustomer(req: Request<{}, {}, Customer>, res: Response) {
  try {
    const customer = await CustomerModel.create(req.body)
    return res.status(201).send(customer)
  } catch (error) {
    return res.status(500).send(error)
  }
}

export async function getCustomers(req: Request, res: Response) {
  try {
    const customers = await CustomerModel.find({})
    return res.status(200).send(customers)
  } catch (error) {
    return res.status(500).send(error)
  }
}

export async function getCustomerById(req: Request, res: Response) {
  try {
    const id: string = req.params.id
    const customer = await CustomerModel.findById(id)
    if(!customer) {
      return res.status(404).send("No customer found")
    }
    return res.status(200).json({customer, msg: "New customer created"})

  } catch (error) {
    return res.status(500).send(error)
  }
}

export async function updateCustomer(req: Request, res: Response) {
  try {
    const id = req.params.id
    const customer = await CustomerModel.findById(id)
    if(!customer) {
      return res.status(404).send("No customer found")
    }
    const newData = req.body
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(id, newData, {new: true})
    return res.status(201).send(updatedCustomer)
  } catch (error) {
    return res.status(500).send(error)
  }
}

export async function deleteCustomer(req: Request, res: Response) {
  try {
    const id = req.params.id
    const customer = await CustomerModel.findById(id)
    if(!customer) {
      return res.status(404).send("No customer found")
    }
    const deletedCustomer = await CustomerModel.findByIdAndDelete(id) 
    return res.status(200).json({deletedCustomer, msg: "Customer deleted"})
  } catch (error) {
    return res.status(500)
  }
}