import { z } from "zod";

export const UserSignupSchema = z.object({
    fullname: z.string().min(3, "Please enter a valid name"),
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, "Password must be atleast 6 characters"),
    contact: z.string().min(10, "Invalid contact number"),
});

export const UserLoginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, "Password must be atleast 6 characters"),
});

export const CheckoutSchema = z.object({
    fullname: z.string().min(3, "Please enter a valid name"),
    contact: z.string().min(10, "Invalid contact number"),
    address: z.string(),
    city: z.string(),
});

export type SignupInputState = z.infer<typeof UserSignupSchema>;
export type LoginInputState = z.infer<typeof UserLoginSchema>;
export type CheckoutInputType = z.infer<typeof CheckoutSchema>;
