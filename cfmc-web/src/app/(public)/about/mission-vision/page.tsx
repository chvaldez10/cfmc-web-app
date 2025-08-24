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

import { FaHeart, FaHandsHelping, FaCross, FaBullhorn } from "react-icons/fa";

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

// Data for mission and vision sections
const SECTIONS_DATA: SectionData[] = [
  {
    title: "Our Vision",
    textBlocks: [
      {
        text: "A church that glorifies God alone by being a Bible-believing, Christ-centered and Holy Spirit-led in doing the Great Commission and Great Commandment.",
        isQuote: false,
      },
      {
        text: "Calgary Filipino Methodist Church envisions itself as a God-glorifying, Christ-shepherding and Holy Spirit-filled Church in fulfilling God's Mission in the City.",
        isQuote: true,
      },
    ],
    colorScheme: "purple",
    icon: FaCross,
  },
  {
    title: "Our Mission",
    textBlocks: [
      {
        text: "A church that shares God's good news of Christ's redeeming love by reaching out to people, experiencing new life in Him and growing in Christlikeness.",
        isQuote: false,
      },
      {
        text: "To reach out to as many people as we possibly can to share with them the good news of God's redeeming love in Jesus Christ. To lead them to that new life of faith, trust, love and obedience to Jesus Christ. And to continue nurturing them to become Christ-like in their lives.",
        isQuote: true,
      },
      {
        text: "We, the members of Calgary Filipino Methodist Church, an ethnic congregation, in response to God's love in Jesus Christ, and by the power of the Holy Spirit, seek to be faithful in our discipleship and ministry to the community. And in order to faithfully carry out the mission of Jesus Christ in the world through ministries among our brethren, and in accordance with the Doctrines and Social Principles of the Methodist Church, shall establish and implement these governing by-laws.",
        isQuote: true,
      },
    ],
    colorScheme: "green",
    reverse: true,
    icon: FaHandsHelping,
  },
  {
    title: "CFMC Motto",
    textBlocks: [
      {
        text: "Love God, Love People. Proclaim the Good News of Christ.",
        isQuote: true,
      },
      {
        text: "Calgary Filipino Methodist Church exists to love God who first loved us and love people by faithfully, holistically, boldly and joyfully proclaiming the Good News of Christ to all.",
        isQuote: false,
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
