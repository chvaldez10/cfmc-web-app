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
import { FaHeart, FaHandsHelping, FaCross, FaBullhorn } from "react-icons/fa";

import type { TextBlock } from "@/types/ui/components";

interface StickyParallaxProps {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: "purple" | "green" | "blue" | "red" | "orange";
  reverse?: boolean;
  iconName?: "FaCross" | "FaHandsHelping" | "FaBullhorn" | "FaHeart";
  imageSrc: string;
  imageAlt: string;
  zIndex?: number;
}

// Icon mapping
const iconMap = {
  FaCross,
  FaHandsHelping,
  FaBullhorn,
  FaHeart,
};

const StickyParallax = ({
  title,
  textBlocks,
  colorScheme,
  reverse = false,
  iconName,
  imageSrc,
  imageAlt,
  zIndex = 1,
}: StickyParallaxProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Resolve icon component from name
  const IconComponent = iconName ? iconMap[iconName] : null;

  const textColor = useColorModeValue("gray.600", "gray.300");
  const quoteColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("gray.900", "white");
  const bgColor = useColorModeValue("white", "gray.800");
  const quoteBgColor = useColorModeValue("gray.50", "gray.800");

  const colorSchemes = {
    purple: {
      bg: useColorModeValue("brand.500", "brand.400"),
      gradient: "linear(to-br, brand.400, brand.600)",
    },
    green: {
      bg: useColorModeValue("secondary.500", "secondary.400"),
      gradient: "linear(to-br, secondary.400, secondary.600)",
    },
    blue: {
      bg: useColorModeValue("blue.500", "blue.400"),
      gradient: "linear(to-br, blue.400, blue.600)",
    },
    red: {
      bg: useColorModeValue("red.500", "red.400"),
      gradient: "linear(to-br, red.400, red.600)",
    },
    orange: {
      bg: useColorModeValue("orange.500", "orange.400"),
      gradient: "linear(to-br, orange.400, orange.600)",
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
      bg={bgColor}
      overflow="hidden"
      zIndex={zIndex}
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
            {/* Overlay with icon */}
            {IconComponent && (
              <Box
                position="absolute"
                top="4"
                right="4"
                p="3"
                bg="rgba(255, 255, 255, 0.9)"
                backdropFilter="blur(10px)"
                rounded="full"
                shadow="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconComponent size="24" color={colorSchemes[colorScheme].bg} />
              </Box>
            )}
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
