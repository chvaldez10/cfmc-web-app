"use client";

import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

import { PromoCard } from "@/components/ui/cards";
import { CARD_DATA } from "@/constants/about";

export default function PromoCards() {
  return (
    <Box as="section" aria-labelledby="promo-cards-heading" pt={20}>
      <Heading
        id="promo-cards-heading"
        as="h2"
        size="lg"
        textAlign="center"
        mb={8}
        color={useColorModeValue("gray.800", "white")}
      >
        About Us
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 6, md: 8 }}
        // maxW="8xl"
        // px={{ base: 4, md: 6 }}
      >
        {CARD_DATA.map((cardData) => (
          <PromoCard key={cardData.id} card={cardData} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
