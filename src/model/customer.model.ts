import { Document, Schema, model } from "mongoose";
import { Customer } from "../schemas/customer.schema";

interface ICustomer extends Document, Customer {}

const customerSchema = new Schema<ICustomer>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    track: [
      {
        type: Schema.Types.ObjectId,
        ref: "Track",
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
  },
  {
    timestamps: true,
  }
);

export const CustomerModel = model<ICustomer>("Customer", customerSchema);
