import { z } from "zod";

export const AutomobileBase = z
  .object({
    name: z.string().min(1, "Campo obrigatório").toLowerCase().trim(),
    licensePlate: z.string().min(1, "Campo obrigatório").toLowerCase().trim(),
  })
  .strict();

export type AutomobileBase = z.infer<typeof AutomobileBase>;

export const Automobile = AutomobileBase.extend({
  _id: z.string(),
});

export type Automobile = z.infer<typeof Automobile>;
