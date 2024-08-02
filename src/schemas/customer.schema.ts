import { z } from "zod";
import { ObjectId } from "../services/objectId";

export const Customer = z
  .object({
    email: z.string().email("Insert a valid email"),
    name: z.string().min(1),
    address: z.string().min(1),
    category: z.array(ObjectId),
    track: z.array(ObjectId).optional(),
    status: z.enum(["active", "inactive"]).default("inactive"),
  })
  .strict();

export type Customer = z.infer<typeof Customer>;

export const CustomerWithId = Customer.extend({
  _id: z.string(),
});

export type CustomerWithId = z.infer<typeof CustomerWithId>;

export const SearchCustomer = z
  .object({
    email: z.string(),
    name: z.string(),
    address: z.string(),
    category: z.array(z.string()),
    track: z.array(z.string()),
    status: z.array(z.string()),
  })
  .partial()
  .strict();

export type SearchCustomer = z.infer<typeof SearchCustomer>;
