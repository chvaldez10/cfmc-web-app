"use client";

import { Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
  spacing?: number;
  pt?: number;
  pb?: number;
}

export default function PageHeader({
  title,
  subtitle,
  size = "lg",
  align = "center",
  spacing = 4,
  pt = 20,
  pb = 8,
}: PageHeaderProps) {
  const titleColor = useColorModeValue("gray.800", "white");
  const subtitleColor = useColorModeValue("gray.600", "gray.300");

  return (
    <VStack spacing={spacing} align={align} pt={pt} pb={pb} w="full">
      <Heading
        as="h1"
        size={size}
        textAlign={align}
        color={titleColor}
        fontWeight="bold"
        lineHeight="tight"
        letterSpacing="tight"
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          fontSize="lg"
          textAlign={align}
          color={subtitleColor}
          maxW="2xl"
          lineHeight="relaxed"
        >
          {subtitle}
        </Text>
      )}
    </VStack>
  );
}
