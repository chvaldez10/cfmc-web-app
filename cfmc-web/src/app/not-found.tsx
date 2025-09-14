import React from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFoundPage() {
  const bg = "gray.50";
  const textColor = "gray.600";
  const accentColor = "purple.600";

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bg}
      px={4}
    >
      <VStack spacing={6} textAlign="center">
        <Heading fontSize="6xl" color={accentColor}>
          404
        </Heading>
        <Text fontSize="xl" color={textColor} maxW="lg">
          We&apos;re sorry — the page you&apos;re looking for isn&apos;t here.
        </Text>
        <Button
          as={Link}
          href="/"
          colorScheme="purple"
          size="lg"
          rounded="full"
        >
          Return Home
        </Button>
      </VStack>
    </Box>
  );
}
