"use client";

import { Box, SimpleGrid } from "@chakra-ui/react";

import { PromoCard } from "@/components/ui/cards";
import { CARD_DATA } from "@/constants/about";

export default function PromoCards() {
  return (
    <Box as="section" aria-labelledby="promo-cards-heading">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 6, md: 8 }}
        // maxW="8xl"
        // px={{ base: 4, md: 6 }}
      >
        {CARD_DATA.map((cardData) => (
          <PromoCard key={cardData.title} card={cardData} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
