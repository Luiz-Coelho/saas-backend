import { model, Schema } from "mongoose";
import { StatusBase } from "../schemas/status.schema";

interface IStatus extends Document, StatusBase {}

const statusSchema = new Schema<IStatus>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const StatusModel = model<IStatus>("Status", statusSchema);
