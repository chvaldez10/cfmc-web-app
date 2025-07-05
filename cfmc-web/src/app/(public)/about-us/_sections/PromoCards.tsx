"use client";

import { Box, SimpleGrid } from "@chakra-ui/react";

import { PromoCard } from "@/components/ui/cards";
import { CARD_DATA } from "@/constants/about";

export default function PromoCards() {
  return (
    <Box as="section" aria-labelledby="promo-cards-heading" id="promo-cards">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 6, md: 8 }}
      >
        {CARD_DATA.map((cardData) => (
          <PromoCard key={cardData.title} card={cardData} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
