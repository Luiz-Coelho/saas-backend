import { Document, model, Schema } from "mongoose";
import { Category } from "../schemas/category.schema";

interface ICategory extends Document, Category {}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    track: [
      {
        type: Schema.Types.ObjectId,
        ref: "Track",
      },
    ],
    customer: [
      {
        type: Schema.Types.ObjectId,
        ref: "Customer",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const CategoryModel = model<ICategory>("Category", categorySchema);
