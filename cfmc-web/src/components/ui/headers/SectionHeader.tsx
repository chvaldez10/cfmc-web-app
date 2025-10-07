"use client";

import { Box, Text, VStack, Heading } from "@chakra-ui/react";
import { NAVBAR_HEIGHT } from "@/components/navigation/PublicNavbar";
import { COMMON_X_PADDING, COMMON_Y_PADDING } from "@/constants/theme/ui";

interface SectionHeaderProps {
  title: string;
  description: string;
  textAlign?: "left" | "center" | "right";
  mt?: string;
}

export default function SectionHeader({
  title,
  description,
  textAlign = "center",
  mt,
}: SectionHeaderProps) {
  const textColor = "gray.800";
  const accentColor = "purple.600";

  return (
    <Box
      as="section"
      aria-labelledby="section-heading"
      mt={mt ?? NAVBAR_HEIGHT}
      py={COMMON_Y_PADDING}
      px={COMMON_X_PADDING}
      maxW={{ base: "full", md: "7xl" }}
      mx="auto"
    >
      <VStack spacing={6} textAlign={textAlign} maxW="4xl" mx="auto">
        <Heading
          id="section-heading"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="extrabold"
          color={accentColor}
          lineHeight="short"
        >
          {title}
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="tall"
          color={textColor}
          fontWeight="normal"
          opacity={0.95}
          maxW="3xl"
        >
          {description}
        </Text>
      </VStack>
    </Box>
  );
}
