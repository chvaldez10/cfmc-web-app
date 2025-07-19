"use client";

import {
  Box,
  Text,
  VStack,
  useColorModeValue,
  Heading,
  Container,
  Divider,
} from "@chakra-ui/react";
import { NAVBAR_HEIGHT } from "@/components/navigation/PublicNavbar";

interface ArticleItem {
  header: string;
  content: string;
}

interface ArticleProps {
  title?: string;
  description?: string;
  items: ArticleItem[];
  showDividers?: boolean;
}

const parseContentWithBibleReferences = (content: string) => {
  // Split content on "Bible references:" to separate main text from references
  const parts = content.split(/Bible references?:\s*/i);

  if (parts.length === 1) {
    // No Bible references found
    return { mainText: content, bibleReferences: null };
  }

  const mainText = parts[0].trim();
  const bibleReferences = parts[1].trim();

  return { mainText, bibleReferences };
};

export default function Article({
  title,
  description,
  items,
  showDividers = true,
}: ArticleProps) {
  const textColor = useColorModeValue("gray.800", "gray.100");
  const accentColor = useColorModeValue("purple.600", "purple.300");
  const sectionBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const bibleRefBg = useColorModeValue("purple.50", "purple.900");
  const bibleRefBorder = useColorModeValue("purple.200", "purple.700");
  const bibleRefText = useColorModeValue("purple.800", "purple.200");

  return (
    <Box
      as="article"
      mt={NAVBAR_HEIGHT}
      py={{ base: 12, md: 16, lg: 20 }}
      bg={sectionBg}
    >
      <Container maxW="4xl" px={{ base: 4, md: 6 }}>
        {/* Article Header */}
        {(title || description) && (
          <VStack spacing={6} textAlign="center" mb={{ base: 8, md: 12 }}>
            {title && (
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="extrabold"
                color={accentColor}
                lineHeight="short"
                letterSpacing="tight"
              >
                {title}
              </Heading>
            )}

            {description && (
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color={textColor}
                fontWeight="normal"
                opacity={0.95}
                maxW="3xl"
              >
                {description}
              </Text>
            )}
          </VStack>
        )}

        {/* Article Content */}
        <VStack spacing={{ base: 8, md: 10 }} align="stretch">
          {items.map((item, index) => {
            const { mainText, bibleReferences } =
              parseContentWithBibleReferences(item.content);
            const isIntroSection =
              index === 0 && item.header === "What We Believe";

            return (
              <Box key={index}>
                <VStack spacing={{ base: 4, md: 6 }} align="stretch">
                  {/* Section Header */}
                  {!isIntroSection && (
                    <Heading
                      as="h2"
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="bold"
                      color={accentColor}
                      lineHeight="short"
                      letterSpacing="tight"
                    >
                      {item.header}
                    </Heading>
                  )}

                  {/* Main Content */}
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="tall"
                    color={textColor}
                    fontWeight={isIntroSection ? "medium" : "normal"}
                    opacity={isIntroSection ? 0.8 : 1}
                    fontStyle={isIntroSection ? "italic" : "normal"}
                    textAlign={isIntroSection ? "center" : "left"}
                  >
                    {mainText}
                  </Text>

                  {/* Bible References */}
                  {bibleReferences && (
                    <Box
                      p={{ base: 4, md: 5 }}
                      bg={bibleRefBg}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor={bibleRefBorder}
                      borderLeft="4px solid"
                      borderLeftColor={accentColor}
                    >
                      <VStack spacing={2} align="start">
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          color={bibleRefText}
                          textTransform="uppercase"
                          letterSpacing="wide"
                        >
                          Bible References
                        </Text>
                        <Text
                          fontSize={{ base: "sm", md: "md" }}
                          lineHeight="relaxed"
                          color={bibleRefText}
                          fontFamily="monospace"
                        >
                          {bibleReferences}
                        </Text>
                      </VStack>
                    </Box>
                  )}
                </VStack>

                {/* Divider between sections */}
                {showDividers && index < items.length - 1 && (
                  <Divider
                    borderColor={borderColor}
                    borderWidth="1px"
                    mt={{ base: 8, md: 10 }}
                    opacity={0.6}
                  />
                )}
              </Box>
            );
          })}
        </VStack>
      </Container>
    </Box>
  );
}
