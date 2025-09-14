"use client";

import React from "react";
import { Box, VStack, Heading, Flex, Circle } from "@chakra-ui/react";
import {
  FaCross,
  FaGlobe,
  FaMapMarkerAlt,
  FaChurch,
  FaUsers,
} from "react-icons/fa";
import TimelineEvent from "./TimelineEvent";
import { HistorySection } from "@/constants/history";

interface TimelineSectionProps {
  section: HistorySection;
  sectionIndex: number;
  isLastSection: boolean;
}

export default function TimelineSection({
  section,
  sectionIndex,
  isLastSection,
}: TimelineSectionProps) {
  const accentColor = "purple.600";
  const borderColor = "purple.300";

  const getSectionIcon = (index: number) => {
    const icons = [FaCross, FaGlobe, FaMapMarkerAlt, FaChurch, FaUsers];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size="16px" />;
  };

  return (
    <Box position="relative">
      {/* Section Header */}
      <Flex align="center" mb={8}>
        <Circle
          size="40px"
          bg={accentColor}
          color="white"
          mr={4}
          flexShrink={0}
        >
          {getSectionIcon(sectionIndex)}
        </Circle>
        <Heading
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          color={accentColor}
          lineHeight="short"
        >
          {section.historySectionTitle}
        </Heading>
      </Flex>

      {/* Events Timeline */}
      <Box ml={{ base: 6, md: 10 }} position="relative">
        {/* Vertical Line */}
        <Box
          position="absolute"
          left="16px"
          top="0"
          bottom="0"
          width="2px"
          bg={borderColor}
          opacity={0.6}
        />

        <VStack spacing={6} align="stretch">
          {section.events.map((event, eventIndex) => (
            <TimelineEvent
              key={eventIndex}
              description={event.description}
              eventIndex={eventIndex}
            />
          ))}
        </VStack>
      </Box>

      {/* Section Divider (except for last section) */}
      {!isLastSection && (
        <Box
          mt={12}
          height="1px"
          bg={borderColor}
          opacity={0.3}
          mx={{ base: 0, md: 4 }}
        />
      )}
    </Box>
  );
}
