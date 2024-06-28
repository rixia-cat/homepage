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
          DEFAULT: "#dedeed",
        },
        footer_background: {
          dark: "#06060c",
          DEFAULT: "#f8f8ff",
        },
        background: {
          dark: "#06060c",
          DEFAULT: "#f8f8ff",
        },

        grayishblack: {
          dark: "#e5e7eb",
          DEFAULT: "#333d4d",
        },

        outline: {
          dark: "#1b1b36",
          DEFAULT: "#dedeed",
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
  ],
};
export default config;
