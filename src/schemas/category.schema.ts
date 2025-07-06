import { z } from "zod";
import { ObjectId } from "../services/objectId";

export const CategoryBase = z
  .object({
    name: z.string().min(1, "Campo obrigatório").toLowerCase().trim(),
    description: z.string().toLowerCase().trim().optional(),
    track: z.array(ObjectId).optional(),
    customer: z.array(ObjectId).optional(),
  })
  .strict();

export type CategoryBase = z.infer<typeof CategoryBase>;

export const Category = CategoryBase.extend({
  _id: z.string(),
});

export type Category = z.infer<typeof Category>;
