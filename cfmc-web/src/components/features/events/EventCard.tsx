"use client";

import React, { useEffect, useState } from "react";

// Chakra UI
import {
  Box,
  Text,
  Badge,
  Flex,
  VStack,
  Stack,
  Skeleton,
} from "@chakra-ui/react";

// Next.js
import Image from "next/image";
import Link from "next/link";

// Types
import { Events } from "@/types/supabase/worship";

// Utils
import { formatLocalDateTimeToHumanReadable } from "@/utils/dateUtils";

type EventCardProps = {
  event: Events;
  isFirstSlide?: boolean;
};

const EventCard = ({ event, isFirstSlide = false }: EventCardProps) => {
  return (
    <Link href={`/events/${event.slug}`}>
      <Box
        width="100%"
        height="100%"
        cursor="pointer"
        role="group"
        transition="transform 0.2s"
        _hover={{ transform: "translateY(-2px)" }}
      >
        <VStack spacing={4} height="100%">
          <EventImage event={event} priority={isFirstSlide} />
          <EventDetails event={event} />
        </VStack>
      </Box>
    </Link>
  );
};

export default EventCard;

const EventImage = ({
  event,
  priority = false,
}: {
  event: Events;
  priority?: boolean;
}) => {
  const [imgError, setImgError] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <Box
      width="100%"
      height="200px"
      bg="linear-gradient(to bottom, #805AD5, #805AD5)"
      position="relative"
      overflow="hidden"
      borderRadius="lg"
    >
      {/* Loading skeleton */}
      {!imgLoaded && !imgError && event.image && (
        <Skeleton
          width="100%"
          height="100%"
          borderRadius="lg"
          startColor="#805AD5"
          endColor="#9F7AEA"
        />
      )}

      {/* Image */}
      {!imgError && event.image && (
        <Image
          src={event.image}
          alt={event.name}
          fill
          style={{
            objectFit: "cover",
            opacity: imgLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          onLoad={() => setImgLoaded(true)}
          onError={() => {
            setImgError(true);
            setImgLoaded(true);
          }}
        />
      )}

      {event.status && (
        <Badge
          colorScheme="green"
          position="absolute"
          top={2}
          right={2}
          zIndex={2}
        >
          {event.status}
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
        zIndex={1}
        _groupHover={{
          opacity: "1",
          transform: "scale(1.05)",
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
      <ClientSideEventDate start_date={event.start_date} />
    </Stack>
  );
};

// Client-side component to handle date formatting and prevent hydration mismatch
const ClientSideEventDate = ({ start_date }: { start_date: string }) => {
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setFormattedDate(formatLocalDateTimeToHumanReadable(start_date));
  }, [start_date]);

  // Show a placeholder during SSR or before client hydration
  if (!isClient) {
    return (
      <Text fontSize="sm" color="gray.500" mt="auto">
        Loading date...
      </Text>
    );
  }

  return (
    <Text fontSize="sm" color="gray.500" mt="auto">
      {formattedDate}
    </Text>
  );
};
