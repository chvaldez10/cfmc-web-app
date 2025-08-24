"use client";

import { HeroHeader } from "@/components/hero";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { FaHandsHelping, FaCross, FaBullhorn } from "react-icons/fa";

interface TextBlock {
  text: string;
  isQuote?: boolean;
}

interface ParallaxSectionProps {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: "purple" | "green" | "blue" | "red" | "orange";
  reverse?: boolean;
  icon?: React.ComponentType<{ size: string; color: string }>;
  zIndex?: number;
}

interface SectionData {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: "purple" | "green" | "blue" | "red" | "orange";
  reverse?: boolean;
  icon?: React.ComponentType<{ size: string; color: string }>;
}

import { ABOUT_CONTENT } from "@/constants/shared/about";

// Data for mission and vision sections
const SECTIONS_DATA: SectionData[] = [
  {
    title: ABOUT_CONTENT.VISION_STATEMENT.title,
    textBlocks: [
      {
        text: ABOUT_CONTENT.VISION_STATEMENT.description,
        isQuote: ABOUT_CONTENT.VISION_STATEMENT.isQuote || false,
      },
      {
        text: ABOUT_CONTENT.VISION_STATEMENT_QUOTE.description,
        isQuote: ABOUT_CONTENT.VISION_STATEMENT_QUOTE.isQuote || false,
      },
    ],
    colorScheme: "purple",
    icon: FaCross,
  },
  {
    title: "Our Mission",
    textBlocks: [
      {
        text: ABOUT_CONTENT.MISSION_STATEMENT.description,
        isQuote: ABOUT_CONTENT.MISSION_STATEMENT.isQuote || false,
      },
      {
        text: ABOUT_CONTENT.MISSION_STATEMENT_QUOTE.description,
        isQuote: ABOUT_CONTENT.MISSION_STATEMENT_QUOTE.isQuote || false,
      },
      {
        text: ABOUT_CONTENT.MISSION_STATEMENT_QUOTE_2.description,
        isQuote: ABOUT_CONTENT.MISSION_STATEMENT_QUOTE_2.isQuote || false,
      },
    ],
    colorScheme: "green",
    reverse: true,
    icon: FaHandsHelping,
  },
  {
    title: ABOUT_CONTENT.CFMC_MOTTO.title,
    textBlocks: [
      {
        text: ABOUT_CONTENT.CFMC_MOTTO.description,
        isQuote: ABOUT_CONTENT.CFMC_MOTTO.isQuote || false,
      },
      {
        text: ABOUT_CONTENT.CFMC_MOTTO_QUOTE.description,
        isQuote: ABOUT_CONTENT.CFMC_MOTTO_QUOTE.isQuote || false,
      },
    ],
    colorScheme: "purple",
    icon: FaBullhorn,
  },
];

function ParallaxSection({
  title,
  textBlocks,
  colorScheme,
  reverse = false,
  icon: IconComponent,
  zIndex = 1,
}: ParallaxSectionProps) {
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
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      overflow="hidden"
      zIndex={zIndex}
    >
      <Container maxW="7xl" px={{ base: 5, md: 8 }} height="100%">
        <Flex
          direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
          align="center"
          justify="center"
          gap={{ base: 10, md: 16 }}
          height="100%"
        >
          {/* Image/Color Box */}
          <Box
            w={{ base: "5/6", md: "md", lg: "lg" }}
            maxW={{ lg: "lg" }}
            h={{ base: "400px", md: "500px", lg: "600px" }}
            bgGradient={colorSchemes[colorScheme].gradient}
            rounded="lg"
            shadow="xl"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={{ base: 10, md: 0 }}
          >
            {IconComponent && (
              <IconComponent size="120" color="rgba(255, 255, 255, 0.3)" />
            )}
          </Box>

          {/* Content */}
          <VStack
            align={{ base: "center", md: "start" }}
            textAlign={{ base: "center", md: "left" }}
            spacing={{ base: 6, md: 8 }}
            flex="1"
            pl={{ md: reverse ? 0 : 16, lg: reverse ? 0 : 24 }}
            pr={{ md: reverse ? 16 : 0, lg: reverse ? 24 : 0 }}
            maxW={{ base: "90%", md: "none" }}
          >
            <Heading
              as="h1"
              size={{ base: "xl", sm: "2xl" }}
              fontSize={{ base: "3xl", sm: "4xl" }}
              mb={6}
              fontWeight="medium"
              color={headingColor}
              lineHeight="shorter"
            >
              {title}
            </Heading>

            <VStack
              spacing={6}
              align={{ base: "center", md: "start" }}
              w="full"
            >
              {textBlocks.map((block, index) => (
                <Text
                  key={index}
                  fontSize={{
                    base: block.isQuote ? "md" : "lg",
                    md: block.isQuote ? "lg" : "xl",
                  }}
                  lineHeight="relaxed"
                  color={block.isQuote ? quoteColor : textColor}
                  fontStyle={block.isQuote ? "italic" : "normal"}
                  fontWeight={block.isQuote ? "normal" : "medium"}
                  maxW="2xl"
                  w="full"
                  textAlign={{ base: "center", md: "left" }}
                  position="relative"
                  pl={block.isQuote ? { base: 4, md: 6 } : 0}
                  py={block.isQuote ? { base: 3, md: 4 } : 0}
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
}

export default function MissionVisionPage() {
  return (
    <>
      <HeroHeader
        title="Mission and"
        titleHighlight="Vision"
        description="We are a community of believers who are committed to sharing the love of Jesus Christ with the world."
      />

      {/* Stacking Sections Container */}
      <Box position="relative" height={`${SECTIONS_DATA.length * 100}vh`}>
        {SECTIONS_DATA.map((section, index) => (
          <ParallaxSection
            key={section.title}
            title={section.title}
            textBlocks={section.textBlocks}
            colorScheme={section.colorScheme}
            reverse={section.reverse}
            icon={section.icon}
            zIndex={index + 1}
          />
        ))}
      </Box>
    </>
  );
}
