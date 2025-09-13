"use client";

import { Box, Container, Stack, VStack } from "@chakra-ui/react";
import {
  EventImageCarousel,
  EventDescription,
  EventDetails,
  EventMap,
} from "@/components/events";
import { mockEvent } from "./page.data";
import { use } from "react";

import { NAVBAR_HEIGHT } from "@/components/navigation/PublicNavbar";
import { COMMON_X_PADDING } from "@/constants/shared/ui";

export default function EventPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const bgColor = "gray.50";

  // Await the async params in Next.js 15
  const resolvedParams = use(params);
  const resolvedSearchParams = use(searchParams);

  // In a real app, you would fetch the event data based on resolvedParams.slug
  const event = mockEvent;

  return (
    <Box
      bg={bgColor}
      mt={NAVBAR_HEIGHT}
      minH="100vh"
      py={{ base: 6, md: 10, lg: 12 }}
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
      <Container maxW="7xl" position="relative" zIndex={1}>
        {/* Event Images Carousel */}
        <EventImageCarousel images={event.images} eventName={event.name} />

        <Stack
          direction={{ base: "column", xl: "row" }}
          spacing={{ base: 10, md: 12, lg: 16 }}
          align="start"
          w="full"
          mt={{ base: 2, md: 4 }}
        >
          {/* Main Event Information */}
          <Box flex="2" minW={0}>
            <EventDescription
              name={event.name}
              category={event.category}
              tags={event.tags}
              description={event.description}
              organizerName={event.organizer_name}
            />
          </Box>

          {/* Event Details Sidebar */}
          <Box flex="1" minW={{ base: "full", xl: "380px" }}>
            <VStack spacing={{ base: 6, md: 8 }} align="stretch">
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
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
