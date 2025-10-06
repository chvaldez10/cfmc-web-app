"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Flex,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { Events } from "@/types/supabase/worship";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiMapPin, FiClock } from "react-icons/fi";

interface UpcomingEventsProps {
  events: Events[] | null;
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  if (!events || events.length === 0) {
    return <EmptyState />;
  }

  return (
    <VStack spacing={6} align="stretch">
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </VStack>
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
        No upcoming events
      </Heading>
      <Text color="gray.500" maxW="md">
        Check back soon for new events and activities.
      </Text>
    </Flex>
  );
}

function EventListItem({ event }: { event: Events }) {
  const eventDate = new Date(event.start_date);
  const endDate = event.end_date ? new Date(event.end_date) : null;

  // Format date parts
  const monthShort = eventDate.toLocaleDateString("en-US", { month: "short" });
  const day = eventDate.getDate();
  const weekday = eventDate.toLocaleDateString("en-US", { weekday: "long" });
  const time = eventDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Duration text
  const getDurationText = () => {
    if (!endDate) return time;
    const endTime = endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${time} - ${endTime}`;
  };

  return (
    <Link href={`/events/${event.slug}`} style={{ width: "100%" }}>
      <Box
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="xl"
        overflow="hidden"
        transition="all 0.2s"
        _hover={{
          borderColor: "purple.400",
          shadow: "lg",
          transform: "translateY(-2px)",
        }}
        cursor="pointer"
        bg="white"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 0, md: 4 }}
        >
          {/* Date Badge - Desktop */}
          <Flex
            display={{ base: "none", md: "flex" }}
            direction="column"
            align="center"
            justify="center"
            minW="120px"
            bg="purple.50"
            p={6}
            borderRightWidth="1px"
            borderColor="gray.200"
          >
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="purple.600"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              {monthShort}
            </Text>
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="purple.700"
              lineHeight="1"
            >
              {day}
            </Text>
            <Text fontSize="xs" color="gray.600" mt={1}>
              {weekday}
            </Text>
          </Flex>

          {/* Event Image */}
          {event.image && (
            <Box
              position="relative"
              width={{ base: "100%", md: "240px" }}
              height={{ base: "200px", md: "auto" }}
              minH={{ md: "180px" }}
              flexShrink={0}
            >
              <Image
                src={event.image}
                alt={event.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 240px"
              />
              {event.occurrence && (
                <Badge
                  position="absolute"
                  top={2}
                  right={2}
                  colorScheme="green"
                  fontSize="xs"
                  px={2}
                  py={1}
                >
                  {event.occurrence}
                </Badge>
              )}
            </Box>
          )}

          {/* Event Details */}
          <Flex
            direction="column"
            flex="1"
            p={{ base: 4, md: 6 }}
            gap={3}
            justify="space-between"
          >
            {/* Mobile Date */}
            <HStack
              display={{ base: "flex", md: "none" }}
              spacing={2}
              color="purple.600"
              fontSize="sm"
              fontWeight="medium"
            >
              <Icon as={FiCalendar} />
              <Text>
                {weekday}, {monthShort} {day}
              </Text>
            </HStack>

            {/* Title and Category */}
            <Box>
              <HStack spacing={2} mb={2} flexWrap="wrap">
                <Badge colorScheme="purple" fontSize="xs" px={2} py={1}>
                  {event.category}
                </Badge>
                {event.tags?.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    colorScheme="gray"
                    fontSize="xs"
                    px={2}
                    py={1}
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>

              <Heading size="md" mb={2} noOfLines={2}>
                {event.name}
              </Heading>

              <Text color="gray.600" fontSize="sm" noOfLines={2}>
                {event.description}
              </Text>
            </Box>

            <Divider display={{ base: "block", md: "none" }} />

            {/* Event Meta Information */}
            <VStack align="stretch" spacing={2} fontSize="sm" color="gray.600">
              <HStack spacing={2}>
                <Icon as={FiClock} color="gray.500" />
                <Text>{getDurationText()}</Text>
              </HStack>

              {event.address && (
                <HStack spacing={2}>
                  <Icon as={FiMapPin} color="gray.500" />
                  <Text noOfLines={1}>{event.address}</Text>
                </HStack>
              )}

              {event.organizer_name && (
                <Text fontSize="xs" color="gray.500">
                  Organized by {event.organizer_name}
                </Text>
              )}
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
}
