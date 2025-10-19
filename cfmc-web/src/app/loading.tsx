"use client";

import { Center, Spinner, Text, VStack, Box } from "@chakra-ui/react";

export default function LoadingSpinner() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="full"
      h="full"
      bg="whiteAlpha.900"
      zIndex={9999}
    >
      <Center minH="100vh" px={4}>
        <VStack gap={6}>
          <Spinner
            borderWidth="6px"
            animationDuration="0.7s"
            color="purple.500"
            size="xl"
          />
          <Text fontSize="lg" fontWeight="medium" color="gray.700">
            Preparing your experience...
          </Text>
          <Text fontSize="sm" color="gray.500">
            Thank you for your patience 🙏
          </Text>
        </VStack>
      </Center>
    </Box>
  );
}
