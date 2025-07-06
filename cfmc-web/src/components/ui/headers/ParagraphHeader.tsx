"use client";

import {
  Box,
  Text,
  VStack,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

interface SectionTextBlockProps {
  title: string;
  description: string;
  textAlign?: "left" | "center" | "right";
}

export default function SectionTextBlock({
  title,
  description,
}: SectionTextBlockProps) {
  const textColor = useColorModeValue("gray.800", "gray.100");
  const accentColor = useColorModeValue("purple.600", "purple.300");

  return (
    <Box as="section" aria-labelledby="section-heading" h="50vh">
      <VStack spacing={6} textAlign="center" justify="center" h="100%">
        <Heading
          id={`${title}-heading`}
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
