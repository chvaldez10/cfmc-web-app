import { VStack, Text } from "@chakra-ui/react";
import CountDownTimer from "./CountDownTimer";

export default function WorshipCountdown() {
  // TODO: Remove this mock date and note that month is 0-indexed
  const mockDate = new Date(Date.UTC(2025, 6, 26, 20, 0, 0)); // 2 PM MDT

  return (
    <VStack spacing={4} align="center">
      <VStack spacing={2} align="center">
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          color="purple.400"
          textAlign="center"
        >
          Next Sunday Service
        </Text>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          textAlign="center"
        >
          Join us every Sunday at 2:00 PM
        </Text>
      </VStack>
      <CountDownTimer worshipStartDateTime={mockDate} />
    </VStack>
  );
}
