"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ProvidersProp {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProp) {
  return (
    // Default theme is light. Light mode will not be implemented.
    // TODO: figure out why this component gives the warning
    // Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed
    <ThemeProvider defaultTheme="light" attribute="class">
      <div
        className="min-h-screen select-none transition-colors duration-300 bg-white"
        suppressHydrationWarning
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
