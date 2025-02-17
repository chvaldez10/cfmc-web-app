import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        parallax:
          "url('https://images.unsplash.com/photo-1541346183200-e8e117d945dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      keyframes: {
        "translate-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "translate-up": "translate-up 0.3s ease-in-out",
        "slide-up": "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      height: {
        "68": "17rem",
        "120": "30rem",
        "576": "576px",
      },
      width: {
        "62": "15.5rem",
        "576": "576px",
      },
      screens: {
        "3xl": "1921px",
      },
      colors: {
        green: {
          10: "#CDE8E5",
          20: "#e7f2f1",
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
      backgroundOpacity: {
        "50": "50%",
      },
    },
  },
  plugins: [],
};

export default config;
