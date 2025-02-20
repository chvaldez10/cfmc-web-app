"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Text,
  Badge,
  Flex,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import "swiper/css";

interface Event {
  id: string;
  name: string;
  slug: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
  city: string;
  isRecurring: boolean;
  price: string;
}

interface EventSwiperProps {
  events: Event[];
}

const EventSwiper = ({ events }: EventSwiperProps) => {
  const slidesPerView = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
  });

  console.log(slidesPerView);

  return (
    <>
      <EventCard event={events[0]} />
      <Box width="100%" overflow="hidden" py={16} px={4} mx="auto">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
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
    </>
  );
};

export default EventSwiper;

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ transform: "scale(1.02)", transition: "all 0.2s" }}
      height={{ base: "350px", md: "400px" }}
      mx="auto"
    >
      <Box
        height="200px"
        bg={`linear-gradient(to bottom, ${event.image}, ${event.image}80)`}
        position="relative"
      >
        {event.isRecurring && (
          <Badge colorScheme="green" position="absolute" top={2} right={2}>
            Recurring
          </Badge>
        )}
      </Box>
      <Stack p={4} spacing={3} height="calc(100% - 200px)">
        <Text fontSize="xl" fontWeight="bold" noOfLines={1}>
          {event.name}
        </Text>
        <Text fontSize="sm" color="gray.600" noOfLines={3}>
          {event.description}
        </Text>
        <Flex justify="space-between" align="center">
          <Text fontSize="sm" color="gray.500" noOfLines={1}>
            {event.city}
          </Text>
          <Text fontSize="sm" fontWeight="bold" noOfLines={1}>
            {event.price}
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.500" noOfLines={1}>
          {event.startDate} - {event.endDate}
        </Text>
      </Stack>
    </Box>
  );
};
