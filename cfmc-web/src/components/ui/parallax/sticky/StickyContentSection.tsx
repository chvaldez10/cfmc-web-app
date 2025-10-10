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
  return (
    <VStack
      align={{ base: "center", md: "center", lg: "start" }}
      textAlign={{ base: "center", md: "center", lg: "left" }}
      spacing={{ base: 6, sm: 7, md: 8, lg: 10 }}
      flex="1"
      px={{ base: 4, sm: 6, md: 8, lg: 0 }}
      pl={{ lg: reverse ? 0 : 16 }}
      pr={{ lg: reverse ? 16 : 0 }}
      maxW="100%"
      w="full"
    >
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        color="gray.900"
        lineHeight="shorter"
        mb={{ base: 2, sm: 2, md: 3, lg: 0 }}
      >
        {title}
      </Heading>

      <VStack
        spacing={{ base: 5, sm: 5, md: 6, lg: 7 }}
        align="stretch"
        w="full"
        maxW="3xl"
      >
        {textBlocks.map((block, index) => {
          if (block.isQuote) {
            return (
              <Text
                key={index}
                fontSize={{ base: "sm", sm: "md", md: "md", lg: "lg" }}
                fontStyle="italic"
                color="gray.800"
                pl={{ base: 4, sm: 5, md: 6 }}
                pr={{ base: 4, sm: 5, md: 6 }}
                py={{ base: 4, sm: 5, md: 6 }}
                borderLeft="4px solid"
                borderLeftColor={`${colorScheme}.500`}
                bg="white"
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
              fontSize={{ base: "md", sm: "lg", md: "lg", lg: "xl" }}
              fontWeight="normal"
              color="gray.700"
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
