"use server";
import "server-only";
import { loginSchema } from "./login-validation";

type FormState = {
  success: boolean;
  fields?: Record<string, string>;
  errors?: Record<string, string[]>;
};

export async function loginAction(prevState: FormState, payload: FormData): Promise<FormState> {
  console.log("payload received", payload);

  if (!(payload instanceof FormData)) {
    return {
      success: false,
      errors: { error: ["Invalid Form Data"] },
    };
  }

  // Convert FormData to a plain object
  const formData = Object.fromEntries(payload);
  console.log("form data", formData);

  // Validate form data using the schema
  const parsed = loginSchema.safeParse(formData);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    const fields: Record<string, string> = {};

    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    console.log("error returned data", formData);
    console.log("error returned error", errors);
    return {
      success: false,
      fields,
      errors,
    };
  }

  // ✅ API call to the `/api/login` route
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        errors: { error: [data.error] },
        fields: parsed.data,
      };
    }

    console.log("Login successful:", data);
    return {
      success: true,
    };
  } catch (error) {
    console.error("API call error:", error);
    return {
      success: false,
      errors: { error: ["Something went wrong"] },
      fields: parsed.data,
    };
  }
}
