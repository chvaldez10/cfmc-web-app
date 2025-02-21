"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Text,
  Badge,
  Flex,
  VStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import "swiper/css";
import { Events } from "@/types/supabase/worship";
import { formatLocalDateTimeToHumanReadable } from "@/utils/dateUtils";

interface EventSwiperProps {
  events: Events[];
}

const EventSwiper = ({ events }: EventSwiperProps) => {
  const slidesPerView = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  });

  console.log(slidesPerView);

  return (
    <Box overflow="hidden" py={16}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={12}
        centeredSlides={false}
        className="eventSwiper"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} key={event.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default EventSwiper;

const EventCard = ({ event }: { event: Events }) => {
  return (
    <VStack spacing={4}>
      <EventImage event={event} />
      <EventDetails event={event} />
    </VStack>
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
