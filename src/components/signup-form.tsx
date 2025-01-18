"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { signupSchema } from "@/app/signup/signup-validation";
import Link from "next/link";
import { PasswordInput } from "./ui/passwordInput";

type SignupFormData = z.infer<typeof signupSchema>;

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.output<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
  });

  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: SignupFormData) => {
    setApiError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post("/api/signup", data);
      setSuccessMessage("Signup successful! You can now log in.");
    } catch (error: any) {
      setApiError(error.response?.data?.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Create an Account</CardTitle>
        <CardDescription>Fill in the form below to sign up.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="John Smith" type="text" {...register("username")} />
            {errors.username && <p className="text-destructive">{errors.username.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" type="email" {...register("email")} />
            {errors.email && <p className="text-destructive">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <PasswordInput id="password" {...register("password")} />
            {errors.password && <p className="text-destructive">{errors.password.message}</p>}
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <PasswordInput id="confirmPassword" {...register("confirmPassword")} />
            {errors.confirmPassword && <p className="text-destructive">{errors.confirmPassword.message}</p>}
          </div>
          {apiError && <p className="text-destructive">{apiError}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Log In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
