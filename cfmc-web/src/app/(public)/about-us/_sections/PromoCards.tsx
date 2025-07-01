"use client";

import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaCreditCard, FaLightbulb, FaHandPointRight } from "react-icons/fa";

import { CardDataProps } from "@/types/ui/components";
import { PromoCard } from "@/components/ui/cards";

const cardData: CardDataProps[] = [
  {
    id: "payment-solutions",
    bg: "linear-gradient(135deg, #FEE36E 0%, #FFD93D 100%)",
    icon: FaCreditCard,
    title: "Payment Solutions",
    subtitle: "Streamlined & Secure",
    description:
      "Modern payment processing that automates everyday tasks, from data entry to invoice approvals, with real-time tracking and instant notifications.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    id: "smart-automation",
    bg: "linear-gradient(135deg, #F55441 0%, #E53E3E 100%)",
    icon: FaLightbulb,
    title: "Smart Automation",
    subtitle: "2X Faster Processing",
    description:
      "Modern payment processing that automates everyday tasks, from data entry to invoice approvals, with real-time tracking and instant notifications.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    id: "spend-control",
    bg: "linear-gradient(135deg, #FDA7DF 0%, #E91E63 100%)",
    icon: FaHandPointRight,
    title: "Spend Control",
    subtitle: "Complete Visibility",
    description:
      "Monitor team spending with real-time dashboards, custom rules, and automated alerts to keep your budget on track.",
    footerLink: { label: "View Pricing", href: "/" },
  },
];

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
        {cardData.map((card) => (
          <PromoCard key={card.id} card={card} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
