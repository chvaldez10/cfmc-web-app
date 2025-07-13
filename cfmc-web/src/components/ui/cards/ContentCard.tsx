"use client";

import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react";

interface ContentCardProps {
  title: string;
  description: string;
}

export const ContentCard = ({ title, description }: ContentCardProps) => {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const accentColor = useColorModeValue("purple.600", "purple.400");
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(0, 0, 0, 0.3)"
  );

  return (
    <Box
      p={{ base: 8, md: 10 }}
      w="full"
      minH="50vh"
      bg={bgColor}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      boxShadow={`0 4px 6px ${shadowColor}, 0 1px 3px ${shadowColor}`}
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: `0 8px 25px ${shadowColor}, 0 4px 10px ${shadowColor}`,
      }}
      position="relative"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      {/* Decorative accent line */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="4px"
        bgGradient="linear(to-r, purple.400, purple.600)"
        borderRadius="xl"
      />

      <Box position="relative" zIndex={1}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          color={accentColor}
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
          opacity={0.9}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};
