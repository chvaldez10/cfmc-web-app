"use client";

import {
  Box,
  Text,
  VStack,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

export default function WelcomeParagraph() {
  const textColor = useColorModeValue("gray.800", "gray.100"); // ⬆️ slightly darker for readability
  const accentColor = useColorModeValue("purple.600", "purple.300");

  return (
    <Box
      as="section"
      aria-labelledby="welcome-heading"
      py={{ base: 10, md: 16 }}
    >
      <VStack spacing={6} maxW="4xl" mx="auto" textAlign="center">
        <Heading
          id="welcome-heading"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="extrabold"
          color={accentColor}
          lineHeight="short"
        >
          Welcome to Calgary Filipino Methodist Church
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="taller"
          color={textColor}
          fontWeight="medium"
        >
          We are a vibrant community of faith where love, compassion, and
          spiritual growth come together. Since our founding, we’ve been
          dedicated to serving our community and spreading the message of
          Christ’s love through worship, fellowship, and service.
        </Text>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="tall"
          color={textColor}
          fontWeight="normal"
          opacity={0.9}
        >
          Our church is more than just a place of worship—it’s a family where
          everyone is welcome, valued, and encouraged to grow in their faith
          journey. Whether you’re new to the area, exploring your faith, or
          looking for a spiritual home, we invite you to join us and experience
          the warmth and love of our congregation.
        </Text>
      </VStack>
    </Box>
  );
}
