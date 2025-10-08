"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AnnouncementCard } from "@/components/ui/cards";
import { mockAnnouncements } from "../page.data";
import { COMMON_MAX_WIDTH, COMMON_Y_PADDING } from "@/constants/theme/ui";
import {
  AnnouncementCategory,
  ANNOUNCEMENT_CATEGORY_COLORS,
  ANNOUNCEMENT_CATEGORY_GRADIENTS,
} from "@/constants/shared/enums";
import { formatDateToMonthDayYear } from "@/utils/dateUtils";

type CategoryFilter =
  | AnnouncementCategory.ALL
  | AnnouncementCategory.BIRTHDAY
  | AnnouncementCategory.WEDDING_ANNIVERSARY
  | AnnouncementCategory.PRAYER_REQUEST
  | AnnouncementCategory.EVENT;

export default function AnnouncementSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    AnnouncementCategory.ALL
  );

  const categories: CategoryFilter[] = [
    AnnouncementCategory.ALL,
    AnnouncementCategory.BIRTHDAY,
    AnnouncementCategory.WEDDING_ANNIVERSARY,
    AnnouncementCategory.PRAYER_REQUEST,
    AnnouncementCategory.EVENT,
  ];

  const filteredAnnouncements = useMemo(() => {
    const active = mockAnnouncements.filter(
      (announcement) => announcement.is_active
    );
    if (selectedCategory === AnnouncementCategory.ALL) return active;
    return active.filter(
      (announcement) => announcement.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
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
                size="md"
                minW={{ base: "120px", md: "140px" }}
                variant={selectedCategory === category ? "solid" : "outline"}
                colorScheme={
                  category === AnnouncementCategory.ALL
                    ? "brand"
                    : ANNOUNCEMENT_CATEGORY_COLORS[category] || "gray"
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
                categoryColor={
                  ANNOUNCEMENT_CATEGORY_COLORS[announcement.category] || "gray"
                }
                categoryGradient={
                  ANNOUNCEMENT_CATEGORY_GRADIENTS[announcement.category] ||
                  "linear(to-r, gray.400, gray.600)"
                }
                formatDate={formatDateToMonthDayYear}
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
  );
}
