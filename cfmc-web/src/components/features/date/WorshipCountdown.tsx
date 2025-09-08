import { VStack, Text } from "@chakra-ui/react";
import CountDownTimer from "./CountDownTimer";
import { GalleryCollage } from "@/components/ui/gallery";
import { HOME_JUMBO_GALLERY_ITEMS } from "@/constants/gallery";
import { getNextSundayWorshipService } from "@/lib/supabase/actions/sundays-special-days";
import { getWorshipDateFromString } from "@/utils/dateUtils";

export default async function WorshipCountdown() {
  const sundayData = await getNextSundayWorshipService();
  const worshipDateTime = getWorshipDateFromString(sundayData?.date);

  return (
    <VStack gap={4} align="center" w="100%">
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
      {/* Static gallery data - no runtime fetch needed */}
      <GalleryCollage
        galleryItems={HOME_JUMBO_GALLERY_ITEMS}
        imageSize={{ base: "70px", md: "90px" }}
        gap={{ base: 80, md: 100 }}
      />
      <CountDownTimer worshipStartDateTime={worshipDateTime} />
    </VStack>
  );
}
