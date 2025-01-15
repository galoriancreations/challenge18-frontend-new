import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().min(2, "2 or more char").email(),
  password: z.string().trim().min(8, "min char is 8"),
});

const signupSchema = z
  .object({
    username: z.string().nonempty("Username is required").min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email format").nonempty("Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmPassword: z.string().nonempty("Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
