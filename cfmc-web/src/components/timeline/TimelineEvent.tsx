"use client";

import React from "react";
import { Box, Text, Flex, Circle } from "@chakra-ui/react";
import { FaBook, FaCalendarAlt, FaHeart, FaUsers } from "react-icons/fa";

interface TimelineEventProps {
  description: string;
  eventIndex: number;
}

export default function TimelineEvent({
  description,
  eventIndex,
}: TimelineEventProps) {
  const accentColor = "purple.600";
  const lightAccentColor = "purple.100";
  const borderColor = "purple.300";
  const eventTextColor = "gray.700";

  const getEventIcon = (index: number) => {
    const icons = [FaBook, FaCalendarAlt, FaHeart, FaUsers];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size="12px" />;
  };

  return (
    <Flex align="flex-start">
      {/* Event Icon */}
      <Circle
        size="32px"
        bg={lightAccentColor}
        color={accentColor}
        mr={6}
        flexShrink={0}
        border="2px solid"
        borderColor={borderColor}
        position="relative"
        zIndex={1}
      >
        {getEventIcon(eventIndex)}
      </Circle>

      {/* Event Content */}
      <Box
        bg="gray.50"
        p={{ base: 4, md: 6 }}
        borderRadius="lg"
        flex="1"
        borderLeft="3px solid"
        borderLeftColor={accentColor}
        transition="all 0.2s ease"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "md",
          bg: "white",
        }}
      >
        <Text
          fontSize={{ base: "sm", md: "md" }}
          lineHeight="tall"
          color={eventTextColor}
          fontWeight="normal"
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
}
