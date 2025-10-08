"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import { HeroHeader } from "@/components/hero";
import { mockAnnouncements } from "./page.data";
import { COMMON_MAX_WIDTH, COMMON_Y_PADDING } from "@/constants/theme/ui";

type CategoryFilter =
  | "All"
  | "Birthday"
  | "Anniversary"
  | "Prayer Request"
  | "Event";

const CATEGORY_COLORS: Record<string, string> = {
  Birthday: "purple",
  Anniversary: "pink",
  "Prayer Request": "green",
  Event: "blue",
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  Birthday: "linear(to-r, purple.400, purple.600)",
  Anniversary: "linear(to-r, pink.400, pink.600)",
  "Prayer Request": "linear(to-r, green.400, green.600)",
  Event: "linear(to-r, blue.400, blue.600)",
};

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "Birthday",
    "Anniversary",
    "Prayer Request",
    "Event",
  ];

  const filteredAnnouncements = useMemo(() => {
    const active = mockAnnouncements.filter(
      (announcement) => announcement.is_active
    );
    if (selectedCategory === "All") return active;
    return active.filter(
      (announcement) => announcement.category === selectedCategory
    );
  }, [selectedCategory]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <HeroHeader
        title="Church"
        titleHighlight="Announcements"
        description="Stay connected with the latest updates, celebrations, and prayer requests from our church family."
      />

      <Box bg="var(--color-light-100)" minH="100vh">
        <Container
          maxW={COMMON_MAX_WIDTH}
          py={COMMON_Y_PADDING}
          px={{ base: 4, md: 8 }}
        >
          {/* Category Filter Section */}
          <VStack spacing={8} mb={12}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              color="gray.800"
              textAlign="center"
            >
              Filter by Category
            </Heading>
            <Flex wrap="wrap" gap={3} justify="center" maxW="4xl" mx="auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  size={{ base: "sm", md: "md" }}
                  variant={selectedCategory === category ? "solid" : "outline"}
                  colorScheme={
                    category === "All"
                      ? "brand"
                      : CATEGORY_COLORS[category] || "gray"
                  }
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "md",
                  }}
                  borderRadius="full"
                  px={6}
                >
                  {category}
                </Button>
              ))}
            </Flex>
          </VStack>

          {/* Announcements Grid */}
          {filteredAnnouncements.length > 0 ? (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={{ base: 6, md: 8 }}
              w="full"
            >
              {filteredAnnouncements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                  formatDate={formatDate}
                />
              ))}
            </SimpleGrid>
          ) : (
            <Box textAlign="center" py={20}>
              <Text fontSize="xl" color="gray.500">
                No announcements found in this category.
              </Text>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}

interface AnnouncementCardProps {
  announcement: (typeof mockAnnouncements)[0];
  formatDate: (date: string) => string;
}

function AnnouncementCard({ announcement, formatDate }: AnnouncementCardProps) {
  const categoryColor = CATEGORY_COLORS[announcement.category] || "gray";
  const categoryGradient =
    CATEGORY_GRADIENTS[announcement.category] ||
    "linear(to-r, gray.400, gray.600)";

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
          <Badge
            colorScheme={categoryColor}
            fontSize={{ base: "xs", md: "sm" }}
            px={3}
            py={1}
            borderRadius="full"
            fontWeight="semibold"
          >
            {announcement.category}
          </Badge>
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
}
