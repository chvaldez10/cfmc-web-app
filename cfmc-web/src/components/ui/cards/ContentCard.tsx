"use client";

import { Box, Text, Heading, BoxProps } from "@chakra-ui/react";

interface ContentCardProps extends BoxProps {
  title: string;
  description: string;
  colorScheme?: "purple" | "green";
}

export const ContentCard = ({
  title,
  description,
  colorScheme = "purple",
  ...rest
}: ContentCardProps) => {
  // Palette definitions
  const palette = {
    green: {
      accent: "green.700",
      gradient: "linear(to-r, green.500, green.700)",
    },
    purple: {
      accent: "purple.600",
      gradient: "linear(to-r, purple.400, purple.600)",
    },
  };
  const { accent, gradient } = palette[colorScheme];

  const textColor = "gray.700";
  const bgColor = "white";
  const borderColor = "gray.200";
  const shadowColor = "rgba(0, 0, 0, 0.1)";

  const defaultShadow = `0 4px 6px ${shadowColor}, 0 1px 3px ${shadowColor}`;
  const hoverShadow = `0 8px 25px ${shadowColor}, 0 4px 10px ${shadowColor}`;

  return (
    <Box
      p={{ base: 6, md: 8, lg: 10 }}
      w="full"
      minH="50vh"
      bg={bgColor}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      boxShadow={defaultShadow}
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: hoverShadow,
      }}
      position="relative"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      {...rest}
    >
      {/* Decorative accent line */}
      <Box
        aria-hidden
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="4px"
        bgGradient={gradient}
        borderRadius="xl"
      />

      <Box position="relative" zIndex={1} textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          color={accent}
          mb={6}
          fontWeight="extrabold"
          lineHeight="tight"
          letterSpacing="tight"
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          lineHeight="relaxed"
          color={textColor}
          fontWeight="medium"
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};
