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
          DEFAULT: "#e0e0eb",
        },
        footer_background: {
          dark: "#021115",
          DEFAULT: "#ededf6",
        },
        background: {
          dark: "#021115",
          DEFAULT: "#ededf6",
        },
        card_background: {
          dark: "#1c171c",
          DEFAULT: "#f0f4f6",
        },
        card_border: {
          dark: "#212B3A",
          DEFAULT: "#d3d6de",
        },

        grayishblack: {
          dark: "#e5e7eb",
          DEFAULT: "#333d4d",
        },

        outline: {
          dark: "#1b1b36",
          DEFAULT: "#dedeed",
        },
      },
    },
    zIndex: {
      tooltip: "1100",
      header: "1500",
      footer: "1500",
      header_popup: "1501",
      drawer: "2600",
      floating_action: "2900",
      modal: "3000",
    },
    boxShadow: {
      inner: "inset 0px 0px 10px 2px rgba(0, 0, 0, 0.70)"
    },
    fontFamily: {
      monospace: ["Menlo", "Monaco", "Courier New", "Consolas", "monospace"],
    },
    listStyleType: {
      square: "square",
      circle: "circle",
      disc: "disc",
      roman: "upper-roman",
      decimal: "decimal",
      lower_roman: "lower-roman",
      lower_alpha: "lower-alpha",
      lower_greek: "lower-greek",
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
export default config;
