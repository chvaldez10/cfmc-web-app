"use client";

import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import {
  EventImageCarousel,
  EventHeader,
  EventDetails,
  EventMap,
} from "@/components/events";
import { mockEvent } from "./page.data";

export default function EventPage({ params }: { params: { slug: string } }) {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  // In a real app, you would fetch the event data based on params.slug
  const event = mockEvent;

  return (
    <Box
      bg={bgColor}
      minH="100vh"
      py={{ base: 4, md: 8 }}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "50vh",
        bgGradient: "linear(to-b, purple.50, transparent)",
        _dark: { bgGradient: "linear(to-b, purple.900, transparent)" },
        opacity: 0.3,
        pointerEvents: "none",
      }}
    >
      <Container
        maxW="8xl"
        px={{ base: 4, md: 8, lg: 12 }}
        position="relative"
        zIndex={1}
      >
        {/* Event Images Carousel */}
        <EventImageCarousel images={event.images} eventName={event.name} />

        <Stack
          direction={{ base: "column", xl: "row" }}
          spacing={{ base: 8, lg: 12 }}
          align="start"
          w="full"
        >
          {/* Main Event Information */}
          <Box flex="2" minW={0}>
            <EventHeader
              name={event.name}
              category={event.category}
              tags={event.tags}
              description={event.description}
              organizerName={event.organizer_name}
            />
          </Box>

          {/* Event Details Sidebar */}
          <Box flex="1" minW={{ base: "full", xl: "350px" }}>
            <EventDetails
              startDate={event.start_date}
              endDate={event.end_date}
              address={event.address}
              status={event.status}
            />

            <EventMap
              googleMapsUrl={event.google_maps_url}
              address={event.address}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
