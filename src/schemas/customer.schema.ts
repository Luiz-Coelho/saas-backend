import z from "zod"

export const Customer = z.object({
    email: z.string().email("Insert a valid email"),
    name: z.string().min(1),
    address: z.string().min(1),
    category: z.string().array(),
    track: z.string().array().optional(),
    status: z.enum(["Active", "Inactive"]).default("Inactive"),
  })

export type Customer = z.infer<typeof Customer>

export const UpdateCustomer = Customer.partial()

export type UpdateCustomer = z.infer<typeof UpdateCustomer>