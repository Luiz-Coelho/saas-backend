import { Schema, model } from "mongoose"
import { Customer } from "../schemas/customer.schema"

const customerSchema = new Schema<Customer>({
  email: {
    type: String, 
    unique: true,
    required: true
  },
  name: { 
    type: String, 
    required: true
  },
  address: { 
    type: String, 
    required: true
  },
  category: { 
    type: [String], 
    required: true
  },
  track: {  
    type: [String]
  },
  status: { 
    type: String, 
    enum: ["Active", "Inactive"], 
    default: "Inactive"
  },
}, {
  timestamps: true
})

export const CustomerModel = model<Customer>("Customer", customerSchema)