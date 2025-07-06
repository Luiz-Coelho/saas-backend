import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
} from "../controllers/customers.controller";
import validate from "../middlewares/validateResource";
import {
  Customer,
  CustomerBase,
  SearchCustomer,
} from "../schemas/customer.schema";
import { Params } from "../schemas/params.schema";

const router = Router();

router.post("/", validate(CustomerBase, "body"), createCustomer);

router.get("/", validate(SearchCustomer, "query"), getCustomers);

router.get("/:id", validate(Params, "params"), getCustomerById);

router.put(
  "/:id",
  validate(Params, "params"),
  validate(Customer, "body"),
  updateCustomer
);

router.delete("/:id", validate(Params, "params"), deleteCustomer);

export default router;
