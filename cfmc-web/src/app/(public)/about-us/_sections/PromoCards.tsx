"use client";

import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

import { PromoCard } from "@/components/ui/cards";
import { CARD_DATA } from "@/constants/about";

export default function PromoCards() {
  return (
    <Box as="section" aria-labelledby="promo-cards-heading">
      <Heading
        id="promo-cards-heading"
        as="h2"
        size="lg"
        textAlign="center"
        mb={8}
        color={useColorModeValue("gray.800", "white")}
      >
        Our Solutions
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 4, md: 6 }}
        py={8}
        px={{ base: 4, md: 0 }}
      >
        {CARD_DATA.map((cardData) => (
          <PromoCard key={cardData.id} card={cardData} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
