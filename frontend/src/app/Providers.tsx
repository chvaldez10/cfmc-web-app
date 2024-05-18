"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ProvidersProp {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProp) {
  return (
    // Default theme is light. Light mode will not be implemented.
    <ThemeProvider defaultTheme="light" attribute="class">
      <div className="min-h-screen select-none transition-colors duration-300 bg-white">
        {children}
      </div>
    </ThemeProvider>
  );
}
