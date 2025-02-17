import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
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
        "--color-light-100": "#FBFBFB",
        // "--color-brand-50": "#f2e8ff", // For testing purposes
      },
      body: {
        bg: "var(--color-light-100)",
      },
    },
  },
});

export default theme;
