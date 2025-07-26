"use client";

import { Box, SimpleGrid } from "@chakra-ui/react";

import { PromoCard } from "@/components/ui/cards";
import { ABOUT_US_PAGE_CARDS } from "@/constants/shared/about";

export default function PromoCards() {
  return (
    <Box
      as="section"
      aria-labelledby="promo-cards-heading"
      id="promo-cards"
      py={{ base: 8, md: 12 }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 6, md: 8 }}
        maxW={{ base: "sm", md: "6xl" }}
        mx="auto"
        px={{ base: 4, md: 6 }}
      >
        {ABOUT_US_PAGE_CARDS.map((cardData) => (
          <PromoCard key={cardData.title} card={cardData} variant="elevated" />
        ))}
      </SimpleGrid>
    </Box>
  );
}
