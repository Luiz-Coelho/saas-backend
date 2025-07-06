import { z } from "zod";
import { ObjectId } from "../services/objectId";

export const CustomerBase = z
  .object({
    email: z
      .string()
      .email("Insira um email válido")
      .min(1, "Campo obrigatório")
      .toLowerCase()
      .trim(),
    name: z.string().min(1, "Campo obrigatório").toLowerCase().trim(),
    address: z.string().min(1, "Campo obrigatório").toLowerCase().trim(),
    category: z.array(ObjectId),
    track: z.array(ObjectId).optional(),
    status: z.string().default("inativo"),
  })
  .strict();

export type CustomerBase = z.infer<typeof CustomerBase>;

export const Customer = CustomerBase.extend({
  _id: z.string(),
});

export type Customer = z.infer<typeof Customer>;

export const SearchCustomer = z
  .object({
    email: z.string().toLowerCase().trim(),
    name: z.string().toLowerCase().trim(),
    address: z.string().toLowerCase().trim(),
    category: z.array(z.string()),
    track: z.array(z.string()),
    status: z.array(z.string()),
  })
  .partial()
  .strict();

export type SearchCustomer = z.infer<typeof SearchCustomer>;
