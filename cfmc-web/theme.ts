import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    // Brand colors (Methodist Purple)
    brand: {
      50: "#f2e8ff",
      100: "#d8b2ff",
      200: "#bf7eff",
      300: "#a74aff",
      400: "#8e15ff",
      500: "#7a00e6", // Primary purple
      600: "#6600b3",
      700: "#520080",
      800: "#3d004d",
      900: "#29001a",
    },
    // Secondary colors (Methodist Green)
    secondary: {
      50: "#e8f9e8",
      100: "#c6e6c6",
      200: "#a3d3a3",
      300: "#80bf80",
      400: "#5dae5d",
      500: "#47a047", // Secondary green
      600: "#3d8c3d",
      700: "#337833",
      800: "#295f29",
      900: "#1f4a1f",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  styles: {
    global: {
      ":root": {
        "--color-brand-50": "#f2e8ff",
        "--color-brand-100": "#d8b2ff",
        "--color-brand-200": "#bf7eff",
        "--color-brand-300": "#a74aff",
        "--color-brand-400": "#8e15ff",
        "--color-brand-500": "#7a00e6", // Primary purple
        "--color-brand-600": "#6600b3",
        "--color-brand-700": "#520080",
        "--color-brand-800": "#3d004d",
        "--color-brand-900": "#29001a",

        "--color-secondary-50": "#e8f9e8",
        "--color-secondary-100": "#c6e6c6",
        "--color-secondary-200": "#a3d3a3",
        "--color-secondary-300": "#80bf80",
        "--color-secondary-400": "#5dae5d",
        "--color-secondary-500": "#47a047", // Secondary green
        "--color-secondary-600": "#3d8c3d",
        "--color-secondary-700": "#337833",
        "--color-secondary-800": "#295f29",
        "--color-secondary-900": "#1f4a1f",
      },
    },
  },
});

export default theme;
