"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../components/userInputFields";

interface RegistrationFormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<RegistrationFormInputs>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<RegistrationFormInputs>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors: Partial<RegistrationFormInputs> = {};
    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = "Username required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password required.";
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Please confirm your password.";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type");

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error: ${res.status} - ${errorText}`);
      }

      let data = null;
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
        setSuccessMessage(data.message || "Account created successfully!");
      } else {
        throw new Error("Invalid JSON response from server.");
      }

      setTimeout(() => router.push("/login"), 2000); // Wait 2 seconds before redirecting
    } catch (error: any) {
      const userFriendlyErrorMessage = error.message.includes("Error:")
        ? "An error occurred. Please try again later."
        : error.message;
      setErrorMessage(userFriendlyErrorMessage || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { label: "Username", type: "text", name: "username" },
    { label: "Email", type: "email", name: "email" },
    { label: "Password", type: "password", name: "password" },
    { label: "Confirm Password", type: "password", name: "confirmPassword" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-500">
      <form className="bg-white p-6 rounded-md shadow-md w-96" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>

        {inputFields.map(({ label, type, name }) => (
          <InputField
            key={name}
            label={label}
            type={type}
            name={name}
            value={formData[name as keyof RegistrationFormInputs]}
            onChange={handleChange}
            error={formErrors[name as keyof RegistrationFormInputs]}
          />
        ))}

        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

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
