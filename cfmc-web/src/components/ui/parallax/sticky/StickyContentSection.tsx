"use client";

import { Heading, Text, VStack } from "@chakra-ui/react";

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
  const textColor = "gray.700";
  const quoteColor = "gray.800";
  const headingColor = "gray.900";
  const quoteBgColor = "white";
  const borderColor = `${colorScheme}.500`;

  return (
    <VStack
      align={{ base: "center", md: "start" }}
      textAlign={{ base: "center", md: "left" }}
      spacing={{ base: 6, md: 8 }}
      flex="1"
      px={{ base: 4, md: 0 }}
      pl={{ md: reverse ? 0 : 16 }}
      pr={{ md: reverse ? 16 : 0 }}
      maxW="100%"
      w="full"
    >
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        color={headingColor}
        lineHeight="shorter"
        mb={{ base: 2, md: 0 }}
      >
        {title}
      </Heading>

      <VStack spacing={{ base: 5, md: 6 }} align="stretch" w="full" maxW="3xl">
        {textBlocks.map((block, index) => {
          if (block.isQuote) {
            return (
              <Text
                key={index}
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                fontStyle="italic"
                color={quoteColor}
                pl={{ base: 4, md: 6 }}
                pr={{ base: 4, md: 6 }}
                py={{ base: 5, md: 6 }}
                borderLeft="4px solid"
                borderLeftColor={borderColor}
                bg={quoteBgColor}
                borderRadius="md"
                lineHeight="tall"
                wordBreak="break-word"
                shadow="sm"
              >
                {block.text}
              </Text>
            );
          }

          return (
            <Text
              key={index}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight="normal"
              color={textColor}
              lineHeight="tall"
              wordBreak="break-word"
            >
              {block.text}
            </Text>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default StickyContentSection;
