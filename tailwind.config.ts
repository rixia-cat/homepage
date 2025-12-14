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
        /* Hue:205 */
        primary: {
          dark: "#41a2e5",
          DEFAULT: "#0b4d90",
        },
        background: {
          dark: "#020d15",
          DEFAULT: "#f2f9fe",
        },
        blueblack: {
          dark: "#c6e6fc",
          DEFAULT: "#081d2c",
        },

        header_background: {
          dark: "#1b1b36",
          DEFAULT: "#E0E0F0",
        },
        footer_background: {
          dark: "#020d15",
          DEFAULT: "#f2f9fe",
        },

        card_background: {
          dark: "#061119",
          DEFAULT: "#eff7fd",
        },
        card_border: {
          dark: "#18252e",
          DEFAULT: "#d3dfe8",
        },

        chip_background: {
          dark: "#0a1c29",
          DEFAULT: "#e9f3fa",
        },
        chip_border: {
          dark: "#1d5074",
          DEFAULT: "#aed3ef",
        },

        outline: {
          dark: "#1b1b36",
          DEFAULT: "#dedeed",
        },
      },
      zIndex: {
        tooltip: "1100",
        header: "1500",
        footer: "1500",
        header_popup: "1501",
        floating_action: "2800",
        drawer: "2900",
        modal: "3000",
      },
      boxShadow: {
        inner: "inset 0px 0px 10px 2px rgba(0, 0, 0, 0.70)",
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
  },
  plugins: [require("tailwindcss-radix")()],
};
export default config;
