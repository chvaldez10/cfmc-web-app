"use client";

import {
  Box,
  Text,
  Heading,
  VStack,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { CardDataProps } from "@/types/ui/components";

interface PromoCardProps {
  card: CardDataProps;
}

const PromoCard = ({ card }: PromoCardProps) => {
  const cardHoverBg = useColorModeValue(
    "rgba(0, 0, 0, 0.05)",
    "rgba(255, 255, 255, 0.1)"
  );

  const borderColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Box as="article" role="article" aria-labelledby={`${card.id}-title`}>
      <VStack
        spacing={5}
        bg={card.bg}
        p={{ base: 5, md: 6 }}
        borderRadius="2xl"
        color="black"
        h="100%"
        minH="320px"
        position="relative"
        overflow="hidden"
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "xl",
          "& .card-icon": {
            transform: "scale(1.1)",
          },
          _before: {
            opacity: 1,
          },
        }}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: cardHoverBg,
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      >
        {/* Icon */}
        <Box
          className="card-icon"
          transition="transform 0.3s ease"
          p={3}
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.2)"
          backdropFilter="blur(10px)"
        >
          <Icon as={card.icon} boxSize={8} />
        </Box>

        {/* Title Section */}
        <Box>
          <Heading
            id={`${card.id}-title`}
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight="short"
            fontWeight="bold"
            mb={1}
          >
            {card.title}
          </Heading>
          {card.subtitle && (
            <Heading
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="short"
              fontWeight="semibold"
              opacity={0.9}
            >
              {card.subtitle}
            </Heading>
          )}
        </Box>

        {/* Description */}
        {card.description && (
          <Text fontSize="sm" lineHeight="1.6" opacity={0.8} flex={1}>
            {card.description}
          </Text>
        )}

        {/* Footer Section */}
        <Box mt="auto" pt={4} w="100%" borderTop={`1px solid ${borderColor}`}>
          {card.footerLink && (
            <Link
              href={card.footerLink.href}
              fontWeight="semibold"
              fontSize="sm"
              textDecoration="none"
              color="black"
              position="relative"
              _hover={{
                textDecoration: "none",
                _after: {
                  width: "100%",
                },
              }}
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: "0%",
                height: "2px",
                bg: "black",
                transition: "width 0.3s ease",
              }}
            >
              {card.footerLink.label} →
            </Link>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default PromoCard;
