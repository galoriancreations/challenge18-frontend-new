// "use client";
// import React from "react";
// import InputField from "../components/userInputFields";

// interface RegistrationFormInputs {
//   username: string;
//   email: string;
//   password: string;
// }

// const LoginPage: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = React.useState(false);

//   const [formData, setFormData] = React.useState<RegistrationFormInputs>({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [formErrors, setFormErrors] = React.useState({ username: "", email: "", password: "" });

//   const [isSubmitting, setIsSubmitting] = React.useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//     setFormData({ username: "", email: "", password: "" }); // Reset form data when closing
//     setFormErrors({ username: "", email: "", password: "" });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const errors = { username: "", email: "", password: "" };
//     let isValid = true;

//     if (!formData.username.trim()) {
//       errors.username = "Username required.";
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       errors.email = "Email required.";
//       isValid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       errors.email = "Invalid email format.";
//       isValid = false;
//     }

//     if (!formData.password.trim()) {
//       errors.password = "Password required";
//       isValid = false;
//     }

//     setFormErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted successfully:", formData);

//     if (!validateForm()) return;
//   };

//   const inputFields = [
//     { label: "Username", type: "text", name: "username" },
//     { label: "Email", type: "email", name: "email" },
//     { label: "Password", type: "password", name: "password" },
//   ];
//   return (
//     <div className="bg-slate-500 min-h-screen flex items-center justify-center">
//       <form className="bg-white p-6 rounded-md shadow-md space-y-4 w-80" onSubmit={handleSubmit}>
//         {inputFields.map(({ label, type, name }) => (
//           <div>
//             <InputField
//               key={name}
//               label={label}
//               type={type}
//               name={name}
//               value={formData[name as keyof RegistrationFormInputs]}
//               onChange={handleChange}
//               error={formErrors[name as keyof RegistrationFormInputs]}
//             />
//           </div>
//         ))}
//         <button type="submit" className="w-full bg-primary-blue text-white py-2 rounded-md hover:bg-primary-blue/90">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
