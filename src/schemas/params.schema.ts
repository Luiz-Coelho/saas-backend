import { z } from "zod";
import { isValidObjectId } from "../services/objectId";

export const Params = z
  .object({
    id: isValidObjectId,
  })
  .strict();

export type Params = z.infer<typeof Params>;
