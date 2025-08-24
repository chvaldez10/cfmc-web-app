"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Skeleton,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

import type { TextBlock } from "@/types/ui/components";

import { AllowedColorSchemes } from "@/constants/shared/enums";

interface StickyParallaxProps {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: AllowedColorSchemes;
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
  zIndex?: number;
}

const StickyParallax = ({
  title,
  textBlocks,
  colorScheme,
  reverse = false,
  imageSrc,
  imageAlt,
  zIndex = 1,
}: StickyParallaxProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const textColor = useColorModeValue("gray.600", "gray.300");
  const quoteColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("gray.900", "white");
  const quoteBgColor = useColorModeValue("gray.50", "gray.800");

  const colorSchemes = {
    purple: {
      bg: useColorModeValue("brand.500", "brand.400"),
      gradient: "linear(to-br, brand.400, brand.600)",
      smokeBg: useColorModeValue("var(--color-light-100)", "gray.800"),
      smokeColors: {
        primary: useColorModeValue(
          "rgba(139, 69, 255, 0.25)",
          "rgba(139, 69, 255, 0.35)"
        ),
        secondary: useColorModeValue(
          "rgba(168, 85, 247, 0.15)",
          "rgba(168, 85, 247, 0.25)"
        ),
        accent: useColorModeValue(
          "rgba(196, 181, 253, 0.1)",
          "rgba(196, 181, 253, 0.15)"
        ),
      },
    },
    green: {
      bg: useColorModeValue("secondary.500", "secondary.400"),
      gradient: "linear(to-br, secondary.400, secondary.600)",
      smokeBg: useColorModeValue("var(--color-light-100)", "gray.800"),
      smokeColors: {
        primary: useColorModeValue(
          "rgba(34, 197, 94, 0.25)",
          "rgba(34, 197, 94, 0.35)"
        ),
        secondary: useColorModeValue(
          "rgba(74, 222, 128, 0.15)",
          "rgba(74, 222, 128, 0.25)"
        ),
        accent: useColorModeValue(
          "rgba(134, 239, 172, 0.1)",
          "rgba(134, 239, 172, 0.15)"
        ),
      },
    },
    red: {
      bg: useColorModeValue("red.500", "red.400"),
      gradient: "linear(to-br, red.400, red.600)",
      smokeBg: useColorModeValue("var(--color-light-100)", "gray.800"),
      smokeColors: {
        primary: useColorModeValue(
          "rgba(239, 68, 68, 0.25)",
          "rgba(239, 68, 68, 0.35)"
        ),
        secondary: useColorModeValue(
          "rgba(248, 113, 113, 0.15)",
          "rgba(248, 113, 113, 0.25)"
        ),
        accent: useColorModeValue(
          "rgba(252, 165, 165, 0.1)",
          "rgba(252, 165, 165, 0.15)"
        ),
      },
    },
  };

  return (
    <Box
      position="sticky"
      top="0"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={colorSchemes[colorScheme].smokeBg}
      overflow="hidden"
      zIndex={zIndex}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `
          radial-gradient(
            circle 300px at center,
            ${colorSchemes[colorScheme].smokeColors.accent} 0%,
            ${colorSchemes[colorScheme].smokeColors.secondary} 35%,
            ${colorSchemes[colorScheme].smokeColors.primary} 70%,
            transparent 100%
          )
        `,
        filter: "blur(30px)",
        animation: "radial-pulse 20s ease-in-out infinite",
        zIndex: -1,
      }}
      sx={{
        "@keyframes radial-pulse": {
          "0%": {
            transform: "scale(0.8)",
            opacity: 0.9,
          },
          "50%": {
            transform: "scale(1.3)",
            opacity: 0.4,
          },
          "100%": {
            transform: "scale(0.8)",
            opacity: 0.9,
          },
        },
      }}
    >
      <Container
        maxW="7xl"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 12 }}
        height="100%"
      >
        <Flex
          direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
          align="center"
          justify="center"
          gap={{ base: 6, md: 16 }}
          height="100%"
          minH={{ base: "auto", md: "100vh" }}
        >
          {/* Image Container */}
          <Box
            w={{ base: "full", md: "lg", lg: "xl" }}
            maxW={{ base: "95%", md: "lg", lg: "xl" }}
            aspectRatio={{ base: "3/2", md: "16/10" }}
            position="relative"
            rounded={{ base: "lg", md: "xl" }}
            shadow={{ base: "lg", md: "2xl" }}
            overflow="hidden"
            mb={{ base: 4, md: 0 }}
            bg="gray.100"
          >
            {!imageLoaded && (
              <Skeleton
                w="full"
                h="full"
                position="absolute"
                inset="0"
                rounded="xl"
                startColor="gray.100"
                endColor="gray.300"
              />
            )}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 512px, 576px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              onLoad={() => setImageLoaded(true)}
              priority={zIndex === 1} // Prioritize first image
            />
          </Box>

          {/* Content */}
          <VStack
            align={{ base: "center", md: "start" }}
            textAlign={{ base: "center", md: "left" }}
            spacing={{ base: 4, md: 8 }}
            flex="1"
            px={{ base: 2, md: 0 }}
            pl={{ md: reverse ? 0 : 16, lg: reverse ? 0 : 24 }}
            pr={{ md: reverse ? 16 : 0, lg: reverse ? 24 : 0 }}
            maxW={{ base: "95%", md: "none" }}
          >
            <Heading
              as="h1"
              size={{ base: "lg", sm: "xl", md: "2xl" }}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              mb={{ base: 3, md: 6 }}
              fontWeight="medium"
              color={headingColor}
              lineHeight="shorter"
            >
              {title}
            </Heading>

            <VStack
              spacing={{ base: 4, md: 6 }}
              align={{ base: "center", md: "start" }}
              w="full"
            >
              {textBlocks.map((block, index) => (
                <Text
                  key={index}
                  fontSize={{
                    base: block.isQuote ? "sm" : "md",
                    md: block.isQuote ? "md" : "lg",
                    lg: block.isQuote ? "lg" : "xl",
                  }}
                  lineHeight="relaxed"
                  color={block.isQuote ? quoteColor : textColor}
                  fontStyle={block.isQuote ? "italic" : "normal"}
                  fontWeight={block.isQuote ? "normal" : "medium"}
                  maxW={{ base: "full", md: "2xl" }}
                  w="full"
                  textAlign={{ base: "center", md: "left" }}
                  position="relative"
                  pl={block.isQuote ? { base: 3, md: 6 } : 0}
                  py={block.isQuote ? { base: 2, md: 4 } : 0}
                  borderLeft={block.isQuote ? "4px solid" : "none"}
                  borderLeftColor={
                    block.isQuote ? colorSchemes[colorScheme].bg : "transparent"
                  }
                  bg={block.isQuote ? quoteBgColor : "transparent"}
                  borderRadius={block.isQuote ? "md" : "none"}
                >
                  {block.text}
                </Text>
              ))}
            </VStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default StickyParallax;
