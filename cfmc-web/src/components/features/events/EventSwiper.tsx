"use client";

import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Chakra UI
import {
  Box,
  Text,
  Badge,
  Flex,
  VStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

// Types
import { Events } from "@/types/supabase/worship";

// Utils
import { formatLocalDateTimeToHumanReadable } from "@/utils/dateUtils";

interface EventSwiperProps {
  events: Events[];
}

const EventSwiper = ({ events }: EventSwiperProps) => {
  const breakpoint = useBreakpointValue({
    base: 1.2,
    sm: 1.5,
    md: 2.3,
    lg: 3.2,
    xl: 4.1,
  });

  return (
    <Box
      overflow="hidden"
      py={8}
      px={{ base: 4, md: 0 }}
      mx="auto"
      maxW={{ base: "full", md: "7xl" }}
      id="events-swiper"
    >
      <Swiper
        spaceBetween={24}
        slidesPerView={breakpoint}
        freeMode={true}
        modules={[FreeMode]}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default EventSwiper;

const EventCard = ({ event }: { event: Events }) => {
  return (
    <Box width="100%" height="100%">
      <VStack spacing={4} height="100%">
        <EventImage event={event} />
        <EventDetails event={event} />
      </VStack>
    </Box>
  );
};

const EventImage = ({ event }: { event: Events }) => {
  return (
    <Box
      width="100%"
      height="200px"
      bg={`linear-gradient(to bottom, ${event.image}, ${event.image}80)`}
      position="relative"
      overflow="hidden"
      borderRadius="lg"
    >
      {event.occurrence && (
        <Badge colorScheme="green" position="absolute" top={2} right={2}>
          {event.occurrence}
        </Badge>
      )}
      <Flex
        position="absolute"
        inset="0"
        align="center"
        justify="center"
        bg="rgba(128, 128, 128, 0.5)"
        opacity="0"
        borderRadius="lg"
        transition="opacity 0.2s, transform 0.2s"
        _hover={{
          opacity: "1",
          transform: "scale(1.05)",
          cursor: "pointer",
          transformOrigin: "center",
        }}
      >
        <Text color="white" fontWeight="bold" fontSize="lg">
          View Event
        </Text>
      </Flex>
    </Box>
  );
};

const EventDetails = ({ event }: { event: Events }) => {
  const humanReadableStartDate = formatLocalDateTimeToHumanReadable(
    event.startDate.toISOString()
  );

  return (
    <Stack
      p={4}
      spacing={3}
      height={{ base: "180px", md: "200px" }}
      borderBottomWidth="1px"
      borderColor="gray.200"
      overflow="hidden"
      boxShadow="md"
    >
      <Text fontSize="xl" fontWeight="bold" noOfLines={1}>
        {event.name}
      </Text>
      <Text fontSize="sm" color="gray.600" noOfLines={3}>
        {event.description}
      </Text>
      <Text fontSize="sm" color="gray.500" mt="auto">
        {humanReadableStartDate}
      </Text>
    </Stack>
  );
};
