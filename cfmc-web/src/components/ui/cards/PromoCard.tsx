"use client";

import {
  Box,
  Text,
  Heading,
  VStack,
  Icon,
  Button,
  forwardRef,
  type BoxProps,
} from "@chakra-ui/react";
import { CardDataProps } from "@/types/ui/components";
import NextLink from "next/link";
import { memo } from "react";

interface PromoCardProps extends Omit<BoxProps, "onClick"> {
  card: CardDataProps;
  variant?: "default" | "elevated";
}

const PromoCard = memo(
  forwardRef<PromoCardProps, "div">(
    ({ card, variant = "default", ...rest }, ref) => {
      const cardHoverOverlay = "rgba(0, 0, 0, 0.08)";

      const textColor = "gray.800";
      const borderColor = "gray.200";
      const shadowColor = "rgba(0, 0, 0, 0.1)";

      const isElevated = variant === "elevated";
      const baseShadow = isElevated
        ? `0 4px 6px ${shadowColor}, 0 1px 3px ${shadowColor}`
        : "none";
      const hoverShadow = isElevated
        ? `0 8px 25px ${shadowColor}, 0 4px 10px ${shadowColor}`
        : `0 4px 12px ${shadowColor}`;

      return (
        <Box
          ref={ref}
          as="article"
          role="button"
          tabIndex={0}
          aria-labelledby={`${card.title}-title`}
          aria-describedby={`${card.title}-description`}
          cursor="pointer"
          position="relative"
          borderRadius="2xl"
          bg={card.bg}
          border="1px solid"
          borderColor={borderColor}
          boxShadow={baseShadow}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            transform: "translateY(-4px)",
            boxShadow: hoverShadow,
            borderColor: "gray.300",
          }}
          _focus={{
            outline: "none",
            transform: "translateY(-4px)",
            boxShadow: hoverShadow,
            borderColor: "purple.500",
            ring: "2px",
            ringColor: "purple.200",
            ringOffset: "2px",
          }}
          _active={{
            transform: "translateY(-2px)",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              window.location.href = card.footerLink.href;
            }
          }}
          {...rest}
        >
          {/* Hover overlay */}
          <Box
            position="absolute"
            inset={0}
            bg={cardHoverOverlay}
            opacity={0}
            transition="opacity 0.3s ease"
            pointerEvents="none"
            borderRadius="2xl"
            _groupHover={{ opacity: 1 }}
          />

          <VStack
            gap={{ base: 4, md: 6 }}
            p={{ base: 6, md: 8 }}
            h="100%"
            minH={{ base: "300px", md: "340px" }}
            position="relative"
            zIndex={1}
            align="stretch"
            justify="space-between"
          >
            {/* Header Section */}
            <VStack gap={{ base: 3, md: 4 }} align="center">
              {/* Icon */}
              <Box
                p={{ base: 3, md: 4 }}
                borderRadius="full"
                bg="whiteAlpha.400"
                backdropFilter="blur(12px)"
                border="1px solid"
                borderColor="whiteAlpha.300"
                transition="all 0.3s ease"
                _groupHover={{
                  transform: "scale(1.1) rotate(5deg)",
                  bg: "whiteAlpha.500",
                }}
              >
                <Icon
                  as={card.icon}
                  boxSize={{ base: 7, md: 9 }}
                  color={textColor}
                  aria-hidden
                />
              </Box>

              {/* Title & Subtitle */}
              <VStack gap={2} textAlign="center">
                <Heading
                  id={`${card.title}-title`}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  lineHeight="tight"
                  color={textColor}
                  letterSpacing="tight"
                >
                  {card.title}
                </Heading>
                {card.subtitle && (
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="medium"
                    color={textColor}
                    opacity={0.8}
                  >
                    {card.subtitle}
                  </Text>
                )}
              </VStack>
            </VStack>

            {/* Description */}
            {card.description && (
              <Text
                id={`${card.title}-description`}
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.6"
                color={textColor}
                opacity={0.85}
                textAlign="center"
                flex={1}
                display="flex"
                alignItems="center"
              >
                {card.description}
              </Text>
            )}

            {/* Call-to-Action Button */}
            <Box pt={2}>
              <Button
                as={NextLink}
                href={card.footerLink.href}
                size={{ base: "sm", md: "md" }}
                colorScheme="purple"
                variant="solid"
                w="full"
                borderRadius="lg"
                fontWeight="semibold"
                transition="all 0.2s ease"
                _hover={{
                  transform: "translateY(-1px)",
                  boxShadow: "lg",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
                _focus={{
                  boxShadow: "0 0 0 3px rgba(147, 51, 234, 0.3)",
                }}
              >
                {card.footerLink.label}
              </Button>
            </Box>
          </VStack>
        </Box>
      );
    }
  )
);

PromoCard.displayName = "PromoCard";

export default PromoCard;
