"use client";

import {
  Box,
  Text,
  VStack,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { NAVBAR_HEIGHT } from "@/components/navigation/PublicNavbar";

interface ParagraphHeaderProps {
  title: string;
  description: string;
  textAlign?: "left" | "center" | "right";
  mt?: string;
}

export default function ParagraphHeader({
  title,
  description,
  textAlign = "center",
  mt,
}: ParagraphHeaderProps) {
  const textColor = useColorModeValue("gray.800", "gray.100");
  const accentColor = useColorModeValue("purple.600", "purple.300");

  return (
    <Box
      as="section"
      aria-labelledby="section-heading"
      mt={mt ?? NAVBAR_HEIGHT}
      py={{ base: 12, md: 16, lg: 20 }}
      px={{ base: 4, md: 0 }}
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
