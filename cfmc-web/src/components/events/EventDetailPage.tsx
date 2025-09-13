"use client";

import { Box, Container, Stack, VStack } from "@chakra-ui/react";
import {
  EventImageCarousel,
  EventDescription,
  EventDetails,
  EventMap,
} from "@/components/events";
import { NAVBAR_HEIGHT } from "@/components/navigation/PublicNavbar";

interface EventDetailPageProps {
  event: {
    name: string;
    category: string;
    tags: string[];
    description: string;
    organizer_name: string;
    start_date: string;
    end_date: string;
    address: string;
    status?: string;
    images: string[];
    google_maps_url: string;
  };
}

const EventDetailPage = ({ event }: EventDetailPageProps) => {
  return (
    <Box bg="gray.50" mt={NAVBAR_HEIGHT} minH="100vh" py={8}>
      <Container maxW="7xl">
        <EventImageCarousel images={event.images} eventName={event.name} />

        <Stack
          direction={{ base: "column", xl: "row" }}
          spacing={12}
          align="start"
          mt={4}
        >
          <Box flex="2" minW={0}>
            <EventDescription
              name={event.name}
              category={event.category}
              tags={event.tags}
              description={event.description}
              organizerName={event.organizer_name}
            />
          </Box>

          <Box flex="1" minW={{ base: "full", xl: "350px" }}>
            <VStack spacing={8} align="stretch">
              <EventDetails
                startDate={event.start_date}
                endDate={event.end_date}
                address={event.address}
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
};

export default EventDetailPage;
