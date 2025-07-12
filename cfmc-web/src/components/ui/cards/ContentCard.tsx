"use client";

import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react";

interface ContentCardProps {
  title: string;
  description: string;
}

export const ContentCard = ({ title, description }: ContentCardProps) => {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const accentColor = useColorModeValue("purple.600", "purple.400");
  const sectionBg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box
      bg={sectionBg}
      p={{ base: 6, md: 8 }}
      borderRadius="xl"
      w="full"
      boxShadow={{ base: "sm", md: "md" }}
      borderLeft="6px solid"
      borderRight="6px solid"
      borderColor={accentColor}
    >
      <Heading
        as="h2"
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        color={accentColor}
        mb={4}
        fontWeight="extrabold"
        lineHeight="short"
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="tall"
        color={textColor}
        fontWeight="normal"
      >
        {description}
      </Text>
    </Box>
  );
};
