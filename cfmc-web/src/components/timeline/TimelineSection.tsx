"use client";

import React, { useState } from "react";
import { Box, VStack, Heading, Flex, Circle, Collapse } from "@chakra-ui/react";
import {
  FaCross,
  FaGlobe,
  FaMapMarkerAlt,
  FaChurch,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
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
  const [isOpen, setIsOpen] = useState(section.isActive ?? true);
  const accentColor = "purple.600";
  const borderColor = "purple.300";

  const getSectionIcon = (index: number) => {
    const icons = [FaCross, FaGlobe, FaMapMarkerAlt, FaChurch, FaUsers];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size="16px" />;
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="relative">
      {/* Section Header - Now Clickable */}
      <Flex
        align="center"
        mb={isOpen ? 8 : 4}
        cursor="pointer"
        onClick={toggleAccordion}
        _hover={{
          opacity: 0.8,
        }}
        transition="all 0.3s ease"
        role="button"
        aria-expanded={isOpen}
        aria-label={`Toggle ${section.historySectionTitle} section`}
      >
        <Circle
          size="40px"
          bg={accentColor}
          color="white"
          mr={4}
          flexShrink={0}
        >
          {getSectionIcon(sectionIndex)}
        </Circle>
        <Box
          color={accentColor}
          mr={4}
          transition="transform 0.3s ease"
          display="flex"
          alignItems="center"
        >
          {isOpen ? <FaChevronUp size="20px" /> : <FaChevronDown size="20px" />}
        </Box>
        <Heading
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          color={accentColor}
          lineHeight="short"
          flex="1"
        >
          {section.historySectionTitle}
        </Heading>
      </Flex>

      {/* Events Timeline - Collapsible */}
      <Collapse in={isOpen} animateOpacity>
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

          <VStack spacing={6} align="stretch" pb={4}>
            {section.events.map((event, eventIndex) => (
              <TimelineEvent
                key={eventIndex}
                description={event.description}
                eventIndex={eventIndex}
              />
            ))}
          </VStack>
        </Box>
      </Collapse>

      {/* Section Divider (except for last section) */}
      {!isLastSection && (
        <Box
          mt={isOpen ? 12 : 8}
          height="1px"
          bg={borderColor}
          opacity={0.3}
          mx={{ base: 0, md: 4 }}
          transition="margin-top 0.3s ease"
        />
      )}
    </Box>
  );
}
