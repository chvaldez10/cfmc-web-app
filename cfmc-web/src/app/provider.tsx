"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import theme from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
      <Toaster />
    </ChakraProvider>
  );
}
