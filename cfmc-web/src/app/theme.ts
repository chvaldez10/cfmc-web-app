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
      300: "#9b5bff",
      400: "#7a00e6",
      500: "#5f1fdb",
      600: "#4335A7",
      700: "#3d0080",
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
        // Try not to duplicate colors. The brand colors are already defined above and is easier to use when its extended from Chakra's theme.
        "--color-light-100": "#FBFBFB",
        "--color-brand-50": "#f2e8ff",
      },
      body: {
        bg: "var(--color-light-100)",
      },
    },
  },
});

export default theme;
