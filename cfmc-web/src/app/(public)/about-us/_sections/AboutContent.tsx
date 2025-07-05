"use client";

import {
  Box,
  Text,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { ABOUT_CONTENT } from "@/constants/about";

export default function AboutContent() {
  return (
    <Box
      as="section"
      aria-labelledby="about-content-heading"
      py={{ base: 8, md: 12 }}
    >
      <VStack spacing={{ base: 8, md: 12 }}>
        {ABOUT_CONTENT.map((item) => (
          <AboutContentItem key={item.title} {...item} />
        ))}
      </VStack>
    </Box>
  );
}

interface AboutContentItemProps {
  title: string;
  description: string;
}

const AboutContentItem = ({ title, description }: AboutContentItemProps) => {
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
      borderLeftColor={accentColor}
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
