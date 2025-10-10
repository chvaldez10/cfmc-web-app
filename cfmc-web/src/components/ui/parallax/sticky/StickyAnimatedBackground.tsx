"use client";

import { Box } from "@chakra-ui/react";
import { AllowedColorSchemes } from "@/constants/shared/enums";
import styles from "./StickyAnimatedBackground.module.css";

interface StickyAnimatedBackgroundProps {
  colorScheme: AllowedColorSchemes;
  zIndex?: number;
  children: React.ReactNode;
  disableStickyOnMobile?: boolean;
}

const StickyAnimatedBackground = ({
  colorScheme,
  zIndex = 1,
  children,
  disableStickyOnMobile = false,
}: StickyAnimatedBackgroundProps) => {
  const colorSchemes = {
    [AllowedColorSchemes.PURPLE]: {
      smokeBg: "var(--color-light-100)",
      smokeColors: {
        primary: "rgba(139, 69, 255, 0.25)",
        secondary: "rgba(168, 85, 247, 0.15)",
        accent: "rgba(196, 181, 253, 0.1)",
      },
    },
    [AllowedColorSchemes.GREEN]: {
      smokeBg: "var(--color-light-100)",
      smokeColors: {
        primary: "rgba(34, 197, 94, 0.25)",
        secondary: "rgba(74, 222, 128, 0.15)",
        accent: "rgba(134, 239, 172, 0.1)",
      },
    },
    [AllowedColorSchemes.RED]: {
      smokeBg: "var(--color-light-100)",
      smokeColors: {
        primary: "rgba(239, 68, 68, 0.25)",
        secondary: "rgba(248, 113, 113, 0.15)",
        accent: "rgba(252, 165, 165, 0.1)",
      },
    },
    [AllowedColorSchemes.YELLOW]: {
      smokeBg: "var(--color-light-100)",
      smokeColors: {
        primary: "rgba(234, 179, 8, 0.25)",
        secondary: "rgba(250, 204, 21, 0.15)",
        accent: "rgba(253, 224, 71, 0.1)",
      },
    },
  };

  const gradientBackground = `
    radial-gradient(
      circle 300px at center,
      ${colorSchemes[colorScheme].smokeColors.accent} 0%,
      ${colorSchemes[colorScheme].smokeColors.secondary} 35%,
      ${colorSchemes[colorScheme].smokeColors.primary} 70%,
      transparent 100%
    )
  `;

  return (
    <Box
      className={styles.animatedBefore}
      position={
        disableStickyOnMobile
          ? { base: "relative", sm: "relative", md: "relative", lg: "sticky" }
          : "sticky"
      }
      top="0"
      minH={{ base: "100vh", sm: "100vh", md: "100vh", lg: "100vh" }}
      height="fit-content"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="var(--color-light-100)"
      overflow="hidden"
      zIndex={zIndex}
      w="full"
      data-testid={`sticky-animated-background-${zIndex}`}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: gradientBackground,
        filter: "blur(30px)",
        zIndex: -1,
      }}
    >
      {children}
    </Box>
  );
};

export default StickyAnimatedBackground;
