"use client";
import React from "react";
import EmailIcon from "../icons/email.icon";
import PasswordIcon from "../icons/password.icon";
import UserIcon from "../icons/user.icon";
import InputField from "../components/userInputFields";

interface RegistrationFormInputs {
  username: string | null;
  email: string | null;
  password: string | null;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = React.useState<RegistrationFormInputs>({
    username: null,
    email: null,
    password: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const inputFields = [
    { label: "Username", type: "text", name: "username", icon: UserIcon },
    { label: "Email", type: "email", name: "email", icon: EmailIcon },
    { label: "Password", type: "password", name: "password", icon: PasswordIcon },
  ];
  return (
    <div className="bg-slate-700 min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded-md shadow-md space-y-4 w-80" onSubmit={handleSubmit}>
        {inputFields.map(({ label, type, name, icon }) => (
          <InputField
            key={name}
            label={label}
            type={type}
            name={name}
            Icon={icon}
            value={formData[name as keyof RegistrationFormInputs]}
            onChange={handleChange}
          />
        ))}
        <button type="submit" className="w-full bg-primary-blue text-white py-2 rounded-md hover:bg-primary-blue/90">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
