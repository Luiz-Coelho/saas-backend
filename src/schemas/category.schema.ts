import { z } from "zod";
import { ObjectId } from "../services/objectId";

export const Category = z
  .object({
    name: z.string(),
    description: z.string().optional(),
    track: z.array(ObjectId).optional(),
    customer: z.array(ObjectId).optional(),
  })
  .strict();

export type Category = z.infer<typeof Category>;
