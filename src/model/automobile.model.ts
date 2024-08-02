import { model, Schema } from "mongoose";
import { Automobile } from "../schemas/automobile.schema";

interface IAutomobile extends Document, Automobile {}

const automobileSchema = new Schema<IAutomobile>(
  {
    name: {
      type: String,
      required: true,
    },
    licensePlate: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AutomobileModel = model<IAutomobile>(
  "Automobile",
  automobileSchema
);
