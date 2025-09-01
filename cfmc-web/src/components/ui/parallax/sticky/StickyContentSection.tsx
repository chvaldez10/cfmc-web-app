"use client";

import { Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";

import type { TextBlock } from "@/types/ui/components";
import { AllowedColorSchemes } from "@/constants/shared/enums";

interface StickyContentSectionProps {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: AllowedColorSchemes;
  reverse?: boolean;
}

const StickyContentSection = ({
  title,
  textBlocks,
  colorScheme,
  reverse = false,
}: StickyContentSectionProps) => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const quoteColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("gray.900", "white");
  const quoteBgColor = useColorModeValue("white", "gray.800");

  const colorSchemes = {
    [AllowedColorSchemes.PURPLE]: {
      bg: useColorModeValue("purple.500", "purple.400"),
    },
    [AllowedColorSchemes.GREEN]: {
      bg: useColorModeValue("green.500", "green.400"),
    },
    [AllowedColorSchemes.RED]: {
      bg: useColorModeValue("red.500", "red.400"),
    },
  };

  return (
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
  );
};

export default StickyContentSection;
