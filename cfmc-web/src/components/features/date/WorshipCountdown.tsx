import { VStack, Text } from "@chakra-ui/react";
import CountDownTimer from "./CountDownTimer";
import { GalleryCollage } from "@/components/ui/gallery";

export default function WorshipCountdown() {
  // TODO: Remove this mock date
  const mockDate = new Date(Date.UTC(2025, 7, 2, 20, 0, 0)); // 2 PM MDT, 0-indexed month

  return (
    <VStack spacing={4} align="center" w="100%">
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
      <GalleryCollage
        maxImages={8}
        // Adjust image size: smaller = more compact, larger = more prominent
        imageSize={{ base: "70px", md: "90px" }}
        // Adjust spacing: smaller = tighter layout, larger = more spread out
        spacing={{ base: 60, md: 80 }}
      />
      <CountDownTimer worshipStartDateTime={mockDate} />
    </VStack>
  );
}
