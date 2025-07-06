import { model, Schema } from "mongoose";
import { AutomobileBase } from "../schemas/automobile.schema";

interface IAutomobile extends Document, AutomobileBase {}

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
