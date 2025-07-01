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
  const cardHoverOverlay = useColorModeValue(
    "rgba(0, 0, 0, 0.05)",
    "rgba(255, 255, 255, 0.08)"
  );
  const dividerColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box as="article" role="article" aria-labelledby={`${card.title}-title`}>
      <VStack
        spacing={5}
        bg={card.bg}
        p={{ base: 5, md: 6 }}
        borderRadius="2xl"
        color={textColor}
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
          inset: 0,
          bg: cardHoverOverlay,
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
          bg="whiteAlpha.300"
          backdropFilter="blur(12px)"
        >
          <Icon as={card.icon} boxSize={8} aria-hidden />
        </Box>

        {/* Title & Subtitle */}
        <Box textAlign="center">
          <Heading
            id={`${card.title}-title`}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            lineHeight="short"
            mb={1}
          >
            {card.title}
          </Heading>
          {card.subtitle && (
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="medium"
              opacity={0.85}
            >
              {card.subtitle}
            </Text>
          )}
        </Box>

        {/* Description */}
        {card.description && (
          <Text
            fontSize="sm"
            lineHeight="1.6"
            opacity={0.75}
            textAlign="center"
            px={1}
            flex={1}
          >
            {card.description}
          </Text>
        )}

        {/* Footer Link */}
        {card.footerLink && (
          <Box
            mt="auto"
            pt={4}
            w="100%"
            borderTop={`1px solid ${dividerColor}`}
          >
            <Link
              href={card.footerLink.href}
              fontWeight="semibold"
              fontSize="sm"
              color={textColor}
              display="inline-block"
              position="relative"
              textDecoration="none"
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
                bg: textColor,
                transition: "width 0.3s ease",
              }}
            >
              {card.footerLink.label} →
            </Link>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default PromoCard;
