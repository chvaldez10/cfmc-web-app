"use client";

import { SimpleGrid, Heading, Text, Flex, Icon } from "@chakra-ui/react";
import { Events } from "@/types/supabase/worship";
import { FiCalendar } from "react-icons/fi";
import EventCard from "./EventCard";
import { EVENTS_PAGE_CONTENT } from "@/constants/shared/ministries";

interface UpcomingEventsProps {
  events: Events[] | null;
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  if (!events || events.length === 0) {
    return <EmptyState />;
  }

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} isFirstSlide={index === 0} />
      ))}
    </SimpleGrid>
  );
}

function EmptyState() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      py={20}
      px={4}
      textAlign="center"
    >
      <Icon as={FiCalendar} boxSize={16} color="gray.300" mb={4} />
      <Heading size="lg" color="gray.600" mb={2}>
        {EVENTS_PAGE_CONTENT[1].title}
      </Heading>
      <Text color="gray.500" maxW="md">
        {EVENTS_PAGE_CONTENT[1].description}
      </Text>
    </Flex>
  );
}
