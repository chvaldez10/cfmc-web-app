import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        // Brand colors (Methodist Purple)
        brand: {
          50: { value: "#f2e8ff" },
          100: { value: "#d8b2ff" },
          200: { value: "#bf7eff" },
          300: { value: "#9b5bff" },
          400: { value: "#7a00e6" },
          500: { value: "#5f1fdb" },
          600: { value: "#4335A7" },
          700: { value: "#3d0080" },
          800: { value: "#3d004d" },
          900: { value: "#29001a" },
        },
        // Secondary colors (Methodist Green)
        secondary: {
          50: { value: "#e8f9e8" },
          100: { value: "#c6e6c6" },
          200: { value: "#a3d3a3" },
          300: { value: "#80bf80" },
          400: { value: "#5dae5d" },
          500: { value: "#47a047" }, // Secondary green
          600: { value: "#3d8c3d" },
          700: { value: "#337833" },
          800: { value: "#295f29" },
          900: { value: "#1f4a1f" },
        },
        // Custom variables
        light: {
          100: { value: "#FBFBFB" },
        },
      },
      fonts: {
        heading: { value: "Roboto, sans-serif" },
        body: { value: "Roboto, sans-serif" },
      },
    },
  },
  globalCss: {
    body: {
      bg: "light.100",
    },
  },
});

export default system;
