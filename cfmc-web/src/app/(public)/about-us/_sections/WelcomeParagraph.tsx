"use client";

import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";

export default function WelcomeParagraph() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const accentColor = useColorModeValue("purple.600", "purple.400");

  return (
    <Box
      as="section"
      aria-labelledby="welcome-heading"
      py={{ base: 8, md: 12 }}
    >
      <VStack spacing={6}>
        <Text
          id="welcome-heading"
          fontSize={{ base: "lg", md: "xl" }}
          lineHeight="tall"
          color={textColor}
          textAlign="center"
          fontWeight="medium"
        >
          Welcome to{" "}
          <Text as="span" color={accentColor} fontWeight="bold">
            Calgary Filipino Methodist Church
          </Text>
          , a vibrant community of faith where love, compassion, and spiritual
          growth come together. Since our founding, we have been dedicated to
          serving our community and spreading the message of Christ's love
          through worship, fellowship, and service.
        </Text>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="tall"
          color={textColor}
          textAlign="center"
          opacity={0.9}
        >
          Our church is more than just a place of worship—it's a family where
          everyone is welcome, valued, and encouraged to grow in their faith
          journey. Whether you're new to the area, exploring your faith, or
          looking for a spiritual home, we invite you to join us and experience
          the warmth and love of our congregation.
        </Text>
      </VStack>
    </Box>
  );
}
