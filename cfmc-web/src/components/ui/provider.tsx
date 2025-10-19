"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/app/theme";
import { Toaster } from "./toaster";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {children}
      <Toaster />
    </ChakraProvider>
  );
}
