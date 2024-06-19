import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "68": "17rem",
        "576": "576px",
      },
      width: {
        "576": "576px",
      },
      colors: {
        green: {
          10: "#f8ffea",
          70: "#0A6847",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#ED9455",
        },
        blue: {
          50: "#0E46A3",
        },
        yellow: {
          50: "#F3CA52",
        },
        white: {
          0: "#ffffff",
          10: "#F9F9F9",
        },
        violet: {
          10: "#F1EAFF",
          20: "#D0BFFF",
          70: "#CFB7FF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
