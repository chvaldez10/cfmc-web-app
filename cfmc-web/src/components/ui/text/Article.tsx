import {
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  Separator,
  Badge,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ColumnLayout } from "@/components/hero";
import { NAVBAR_HEIGHT } from "@/components/navigation/PublicNavbar";
import { COMMON_Y_PADDING } from "@/constants/theme/ui";

interface ArticleItem {
  header: string;
  content: string;
  bibleReferences?: string[];
}

interface ArticleProps {
  items: ArticleItem[];
  showDividers?: boolean;
}

export default function Article({ items, showDividers = true }: ArticleProps) {
  const textColor = "gray.800";
  const accentColor = "purple.600";
  const borderColor = "gray.200";
  const bibleRefBg = "purple.50";
  const bibleRefBorder = "purple.200";
  const bibleRefText = "purple.800";

  return (
    <ColumnLayout maxW="5xl" mt={NAVBAR_HEIGHT} py={COMMON_Y_PADDING}>
      {/* Article Content */}
      <VStack spacing={{ base: 8, md: 10 }} align="stretch">
        {items.map((item, index) => {
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
                  {item.content}
                </Text>

                {/* Bible References */}
                {item.bibleReferences && item.bibleReferences.length > 0 && (
                  <Box
                    p={{ base: 4, md: 5 }}
                    bg={bibleRefBg}
                    borderRadius="lg"
                    border="1px solid"
                    borderColor={bibleRefBorder}
                    borderLeft="4px solid"
                    borderLeftColor={accentColor}
                  >
                    <VStack spacing={3} align="start">
                      <HStack spacing={2}>
                        <Box
                          as="svg"
                          width={4}
                          height={4}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={bibleRefText}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </Box>
                        <Text
                          fontSize="sm"
                          fontWeight="semibold"
                          color={bibleRefText}
                          textTransform="uppercase"
                          letterSpacing="wide"
                        >
                          Bible References
                        </Text>
                      </HStack>
                      <Wrap spacing={2}>
                        {item.bibleReferences.map((reference, refIndex) => (
                          <WrapItem key={refIndex}>
                            <Badge
                              variant="subtle"
                              colorScheme="purple"
                              fontSize={{ base: "xs", md: "sm" }}
                              px={3}
                              py={1}
                              borderRadius="full"
                              fontFamily="monospace"
                              fontWeight="medium"
                            >
                              {reference}
                            </Badge>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </VStack>
                  </Box>
                )}
              </VStack>

              {/* Separator between sections */}
              {showDividers && index < items.length - 1 && (
                <Separator
                  borderColor={borderColor}
                  css={{ "--separator-border-width": "1px" }}
                  mt={{ base: 8, md: 10 }}
                  opacity={0.6}
                />
              )}
            </Box>
          );
        })}
      </VStack>
    </ColumnLayout>
  );
}
