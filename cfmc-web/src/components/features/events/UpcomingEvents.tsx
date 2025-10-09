"use client";

import { useEffect, useState } from "react";
import { SimpleGrid, Heading, Text, Flex, Icon } from "@chakra-ui/react";
import { Events } from "@/types/supabase/worship";
import { FiCalendar } from "react-icons/fi";
import EventCard from "./EventCard";
import EventCardSkeleton from "./EventCardSkeleton";
import { EVENTS_PAGE_CONTENT } from "@/constants/shared/ministries";
import { getUpcomingEvents } from "@/lib/supabase/actions/events";

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Events[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const data = await getUpcomingEvents();
      setEvents(data);
      setIsLoading(false);
    };
    fetchEvents();
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

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

function LoadingSkeleton() {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <EventCardSkeleton key={i} />
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
