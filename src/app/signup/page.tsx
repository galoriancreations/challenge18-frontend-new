"use client";
import { z } from "zod";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../components/userInputFields";
import { useForm, SubmitHandler } from "react-hook-form";

// interface RegistrationFormInputs {
//   email: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
// }

// 🔥 Zod schema for form validation
const schema = z
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

type RegistrationFormInputs = z.infer<typeof schema>;

const SignUpPage: React.FC = () => {
  const router = useRouter();

  // 🔥 Use React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormInputs>({
    resolver: zodResolver(schema),
  });

  // 🔥 Form submit logic
  const onSubmit: SubmitHandler<RegistrationFormInputs> = async (formData) => {
    try {
      const { data } = await axios.post("/api/signup", formData);
      alert(data.message || "Account created successfully!");
      setTimeout(() => router.push("/login"), 2000);
      console.log("success");
    } catch (error: any) {
      console.error("Signup error", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const inputFields = [
    { label: "Username", type: "text", name: "username" },
    { label: "Email", type: "email", name: "email" },
    { label: "Password", type: "password", name: "password" },
    { label: "ConfirmPassword", type: "password", name: "confirmPassword" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-500">
      <form className="bg-white p-6 rounded-md shadow-md w-96" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>
        {inputFields.map(({ label, type, name }) => (
          <div key={name}>
            <InputField
              {...register(name as keyof RegistrationFormInputs)}
              label={label}
              type={type}
              error={errors[name as keyof RegistrationFormInputs]?.message}
            />
          </div>
        ))}

        <button
          type="submit"
          className={`w-full bg-primary-blue text-white py-2 rounded-md hover:bg-primary-blue/90 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
