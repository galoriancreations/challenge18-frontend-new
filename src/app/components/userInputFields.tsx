import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, error, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <div className="relative">
        <input
          {...props}
          type={type === "password" && isPasswordVisible ? "text" : type}
          name={name}
          placeholder={label}
          className={`w-full p-2 border rounded-md focus:outline-none pr-10 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isPasswordVisible ? <FaRegEyeSlash className="w-5 h-5" /> : <FaRegEye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default InputField;
