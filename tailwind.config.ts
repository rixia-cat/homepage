import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        header_background: {
          dark: "#1b1b36",
          DEFAULT: "#e5e5eb",
        },
        footer_background: {
          dark: "#06060c",
          DEFAULT: "#f8f8ff",
        },
        background: {
          dark: "#06060c",
          DEFAULT: "#f8f8ff",
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
  ],
};
export default config;
