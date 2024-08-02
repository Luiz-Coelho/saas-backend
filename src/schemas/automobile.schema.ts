import { z } from "zod";

export const Automobile = z
  .object({
    name: z.string(),
    licensePlate: z.string(),
  })
  .strict();

export type Automobile = z.infer<typeof Automobile>;
