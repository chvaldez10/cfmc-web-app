import { VStack, Text } from "@chakra-ui/react";
import CountDownTimer from "./CountDownTimer";
import { GalleryCollage } from "@/components/ui/gallery";

export default function WorshipCountdown() {
  // TODO: Remove this mock date and note that month is 0-indexed
  const mockDate = new Date(Date.UTC(2025, 7, 2, 20, 0, 0)); // 2 PM MDT

  return (
    <VStack spacing={6} align="center">
      <VStack spacing={4} align="center">
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          color="purple.600"
          textAlign="center"
        >
          Join Us This Sunday
        </Text>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          textAlign="center"
        >
          Experience worship with our community
        </Text>
        <GalleryCollage maxImages={7} />
      </VStack>
      <CountDownTimer worshipStartDateTime={mockDate} />
    </VStack>
  );
}
