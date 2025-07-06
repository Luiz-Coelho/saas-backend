import { z } from "zod";

export const StatusBase = z
  .object({
    name: z.string().toLowerCase().trim(),
  })
  .strict();

export type StatusBase = z.infer<typeof StatusBase>;

export const Status = StatusBase.extend({
  _id: z.string(),
});

export type Status = z.infer<typeof Status>;
