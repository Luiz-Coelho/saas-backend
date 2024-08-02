import { Schema, Types } from "mongoose";
import { z } from "zod";

export const isValidObjectId = z
  .string()
  .refine((id: string) => Types.ObjectId.isValid(id), {
    message: "Invalid ObjectId",
  });

export const ObjectId = z.custom<Schema.Types.ObjectId>();
