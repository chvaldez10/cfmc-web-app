"use client";

import { VStack, Text, Flex, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CountDownTimer from "./CountDownTimer";
import { GalleryCollage } from "@/components/ui/gallery";
import { HOME_JUMBO_GALLERY_ITEMS } from "@/constants/gallery";
import { getNextSundayWorshipService } from "@/lib/supabase/actions/sundays-special-days";
import { getWorshipDateFromString } from "@/utils/dateUtils";
import { Branding } from "@/constants/shared/enums";

const WORSHIP_COUNTDOWN_FALLBACK = "2025-09-14T20:00:00Z";

const CountdownSkeleton = () => (
  <Flex
    direction="row"
    gap={{ base: 2, md: 5 }}
    textAlign="center"
    justifyContent="center"
    alignItems="center"
  >
    {[1, 2, 3, 4].map((i) => (
      <Skeleton
        key={i}
        width={{ base: "5rem", md: "6rem" }}
        height={{ base: "5rem", md: "6rem" }}
        borderRadius="md"
        startColor="gray.200"
        endColor="gray.300"
      />
    ))}
  </Flex>
);

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
      {/* Heading */}
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        color="purple.600"
        textAlign="center"
      >
        Join Us This Sunday
      </Text>

      {/* Address Section */}
      <VStack spacing={1} align="center" maxW={{ base: "90%", md: "600px" }}>
        <Flex align="center" gap={2} justify="center">
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.800"
            fontWeight="medium"
          >
            📍 {Branding.CHURCH_ADDRESS}
          </Text>
        </Flex>

        <Text
          fontSize={{ base: "xs", md: "sm" }}
          color="gray.500"
          textAlign="center"
        >
          (Place of Worship)
        </Text>
      </VStack>

      <GalleryCollage
        galleryItems={HOME_JUMBO_GALLERY_ITEMS}
        imageSize={{ base: "70px", md: "90px" }}
        spacing={{ base: 80, md: 100 }}
      />

      {/* Countdown */}
      {isLoading ? (
        <CountdownSkeleton />
      ) : (
        <CountDownTimer worshipStartDateTime={worshipDateTime} />
      )}
    </VStack>
  );
}
