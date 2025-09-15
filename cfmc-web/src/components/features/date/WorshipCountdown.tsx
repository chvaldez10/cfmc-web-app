"use client";

import { VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CountDownTimer from "./CountDownTimer";
import { GalleryCollage } from "@/components/ui/gallery";
import { HOME_JUMBO_GALLERY_ITEMS } from "@/constants/gallery";
import { getNextSundayWorshipService } from "@/lib/supabase/actions/sundays-special-days";
import { getWorshipDateFromString } from "@/utils/dateUtils";

const WORSHIP_COUNTDOWN_FALLBACK = "2025-09-14T20:00:00Z";

export default function WorshipCountdown() {
  const [worshipDateTime, setWorshipDateTime] = useState<Date | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWorshipData = async () => {
      try {
        const sundayData = await getNextSundayWorshipService();
        const worshipDate = getWorshipDateFromString(sundayData?.date);
        setWorshipDateTime(worshipDate);
      } catch (error) {
        console.error("Error fetching worship data:", error);
        setWorshipDateTime(
          getWorshipDateFromString(WORSHIP_COUNTDOWN_FALLBACK)
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorshipData();
  }, []);

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
      {/* Static gallery data - no runtime fetch needed */}
      <GalleryCollage
        galleryItems={HOME_JUMBO_GALLERY_ITEMS}
        imageSize={{ base: "70px", md: "90px" }}
        spacing={{ base: 80, md: 100 }}
      />
      {!isLoading && <CountDownTimer worshipStartDateTime={worshipDateTime} />}
    </VStack>
  );
}
