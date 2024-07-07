import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        header_background: {
          dark: "#1b1b36",
          DEFAULT: "#e0e0eb"
        },
        footer_background: {
          dark: "#070c0e",
          DEFAULT: "hsl(240, 15%, 97%)"
        },
        background: {
          dark: "#070c0e",
          DEFAULT: "hsl(240, 15%, 97%)"
        },
        card_background: {
          dark: "#1c171c",
          DEFAULT: "#ffffff"
        },
        card_border: {
          dark: "#374151",
          DEFAULT: "#d3d6de"
        },

        grayishblack: {
          dark: "#e5e7eb",
          DEFAULT: "#333d4d"
        },

        outline: {
          dark: "#1b1b36",
          DEFAULT: "#dedeed"
        }
      }
    },
    fontFamily: {
      monospace: ["Menlo", "Monaco", "Courier New", "Consolas", "monospace"]
    }
  },
  plugins: [require("tailwindcss-radix")()]
}
export default config
