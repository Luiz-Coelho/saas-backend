import { z } from "zod";
import { ObjectId } from "../services/objectId";

export const Track = z
  .object({
    name: z.string(),
    category: ObjectId,
    customer: z.array(ObjectId),
  })
  .strict();

export type Track = z.infer<typeof Track>;
