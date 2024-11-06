import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#111533", // Deep blue, for sidebar background and header
        secondary: "#FDC63D", // Bright yellow, for buttons and accents
        accent: "#5a5a61", // Light blue for text highlights
        light: "#F5F5F5", // Light background for cards or sections
        textPrimary: "#FFFFFF", // White, for main text on dark backgrounds
        textSecondary: "#757575", // Grey text for secondary information
      },
    },
  },
  plugins: [],
};
export default config;
