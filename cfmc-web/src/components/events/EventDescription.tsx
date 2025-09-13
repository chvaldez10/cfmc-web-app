"use client";

import { VStack, HStack, Badge, Heading, Box, Text } from "@chakra-ui/react";
import EventBadges from "./EventBadges";

interface EventDescriptionProps {
  name: string;
  category: string;
  tags: string[];
  description: string;
  organizerName: string;
}

const EventDescription = ({
  name,
  category,
  tags,
  description,
  organizerName,
}: EventDescriptionProps) => {
  const textColor = "gray.700";
  const descriptionColor = "gray.600";
  const quoteBgColor = "white";

  return (
    <VStack align="start" spacing={8} w="full">
      {/* Header Section */}
      <VStack align="start" spacing={5} w="full">
        <EventBadges category={category} tags={tags} />

        <Heading as="h1" size="4xl" color="gray.800" fontWeight="black">
          {name}
        </Heading>
      </VStack>

      {/* Description Section */}
      <VStack align="start" spacing={6} w="full">
        <Box>
          <Heading
            as="h2"
            size="lg"
            color="gray.800"
            mb={4}
            fontWeight="bold"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: 0,
              width: "60px",
              height: "3px",
              bg: "purple.600",
              borderRadius: "full",
            }}
          >
            About This Event
          </Heading>
          <Text
            fontSize="lg"
            lineHeight="tall"
            color={descriptionColor}
            whiteSpace="pre-line"
            mt={6}
          >
            {description}
          </Text>
        </Box>

        {/* Organizer Information */}
        <Box
          p={6}
          bg={quoteBgColor}
          borderRadius="xl"
          borderLeft="4px solid"
          borderLeftColor="purple.600"
          w="full"
        >
          <VStack align="start" spacing={2}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="purple.600"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Organized by
            </Text>
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              {organizerName}
            </Text>
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
};

export default EventDescription;
