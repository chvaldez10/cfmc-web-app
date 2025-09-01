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
  const borderColor = useColorModeValue(
    `${colorScheme}.500`,
    `${colorScheme}.400`
  );

  return (
    <VStack
      align={{ base: "center", md: "start" }}
      textAlign={{ base: "center", md: "left" }}
      spacing={6}
      flex="1"
      px={{ base: 4, md: 0 }}
      pl={{ md: reverse ? 0 : 16 }}
      pr={{ md: reverse ? 16 : 0 }}
      maxW="100%"
    >
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="medium"
        color={headingColor}
        lineHeight="shorter"
      >
        {title}
      </Heading>

      <VStack spacing={4} align="stretch" w="full" maxW="2xl">
        {textBlocks.map((block, index) => {
          if (block.isQuote) {
            return (
              <Text
                key={index}
                fontSize={{ base: "md", md: "lg" }}
                fontStyle="italic"
                color={quoteColor}
                pl={6}
                py={4}
                borderLeft="4px solid"
                borderLeftColor={borderColor}
                bg={quoteBgColor}
                borderRadius="md"
                lineHeight="relaxed"
              >
                {block.text}
              </Text>
            );
          }

          return (
            <Text
              key={index}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="medium"
              color={textColor}
              lineHeight="relaxed"
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
