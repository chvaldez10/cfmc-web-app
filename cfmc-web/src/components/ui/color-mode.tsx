"use client";

import type { SpanProps } from "@chakra-ui/react";
import { Span } from "@chakra-ui/react";
import * as React from "react";

export type ColorMode = "light";

export interface UseColorModeReturn {
  colorMode: ColorMode;
}

// Light mode only - no color mode switching
export function useColorMode(): UseColorModeReturn {
  return {
    colorMode: "light",
  };
}

// Always returns the light value
export function useColorModeValue<T>(light: T, _dark: T) {
  return light;
}

// Light mode wrapper component (for consistency with existing code)
export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    );
  }
);
