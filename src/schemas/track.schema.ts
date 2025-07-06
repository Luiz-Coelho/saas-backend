import { z } from "zod";
import { ObjectId } from "../services/objectId";

export const TrackBase = z
  .object({
    name: z.string().min(1, "Campo obrigatório").toLowerCase().trim(),
    category: ObjectId,
    customer: z.array(ObjectId).optional(),
  })
  .strict();

export type TrackBase = z.infer<typeof TrackBase>;

export const Track = TrackBase.extend({
  _id: z.string(),
});

export type Track = z.infer<typeof Track>;
