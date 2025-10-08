"use client";

import { Box, VStack, HStack, Heading, Text } from "@chakra-ui/react";
import { CategoryBadge } from "@/components/ui/badge";

interface Announcement {
  id: number;
  announcement: string;
  category: string;
  created: string;
  updated: string;
  date: string;
  description: string;
  event_id: number | null;
  is_active: boolean;
}

interface AnnouncementCardProps {
  announcement: Announcement;
  categoryColor: string;
  categoryGradient: string;
  formatDate: (date: string) => string;
}

export const AnnouncementCard = ({
  announcement,
  categoryColor,
  categoryGradient,
  formatDate,
}: AnnouncementCardProps) => {
  return (
    <Box
      bg="white"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.200"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "xl",
      }}
      display="flex"
      flexDirection="column"
      h="full"
      position="relative"
    >
      {/* Decorative gradient accent */}
      <Box aria-hidden h="4px" bgGradient={categoryGradient} />

      <VStack align="stretch" p={{ base: 6, md: 7 }} spacing={4} flex="1">
        {/* Category Badge and Date */}
        <HStack justify="space-between" align="start" flexWrap="wrap" gap={2}>
          <CategoryBadge
            colorScheme={categoryColor}
            label={announcement.category}
          />
          <Text
            fontSize="sm"
            color="gray.500"
            fontWeight="medium"
            textAlign="right"
          >
            {formatDate(announcement.date)}
          </Text>
        </HStack>

        {/* Title */}
        <Heading
          as="h3"
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.800"
          fontWeight="bold"
          lineHeight="tight"
          minH={{ base: "auto", md: "56px" }}
        >
          {announcement.announcement}
        </Heading>

        {/* Description */}
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="gray.700"
          lineHeight="relaxed"
          flex="1"
        >
          {announcement.description}
        </Text>

        {/* Footer with created date */}
        <HStack pt={4} mt="auto" borderTop="1px solid" borderColor="gray.100">
          <Text fontSize="xs" color="gray.400" fontStyle="italic">
            Posted {formatDate(announcement.created)}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};
