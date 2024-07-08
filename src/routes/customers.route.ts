import { Router } from "express";
import { createCustomer, deleteCustomer, getCustomers, getCustomerById, updateCustomer } from "../controllers/customers.controller";
import validate from "../middlewares/validateResource";
import { Customer, UpdateCustomer } from "../schemas/customer.schema";

const router = Router()

router.post("/", validate(Customer), createCustomer)

router.get("/", getCustomers)

router.get("/:id", getCustomerById)

router.put("/:id", validate(UpdateCustomer), updateCustomer)

router.delete("/:id", deleteCustomer)

export default router