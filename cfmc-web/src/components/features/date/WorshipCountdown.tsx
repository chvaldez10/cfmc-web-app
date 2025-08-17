import { VStack, Text } from "@chakra-ui/react";
import CountDownTimer from "./CountDownTimer";
import { GalleryCollage } from "@/components/ui/gallery";
import { getGalleryItems } from "@/lib/supabase/actions/gallery-images";
import { getNextSundayWorshipService } from "@/lib/supabase/actions/sundays-special-days";
import { getWorshipDateFromString } from "@/utils/dateUtils";

export default async function WorshipCountdown() {
  const galleryItems = await getGalleryItems("home_jumbo");
  const sundayData = await getNextSundayWorshipService();
  const worshipDateTime = getWorshipDateFromString(sundayData?.date);

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
        galleryItems={galleryItems}
        imageSize={{ base: "70px", md: "90px" }}
        spacing={{ base: 80, md: 100 }}
      />
      <CountDownTimer worshipStartDateTime={worshipDateTime} />
    </VStack>
  );
}
