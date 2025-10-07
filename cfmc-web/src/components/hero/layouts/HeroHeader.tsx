"use client";

import { Flex, Container, Heading, Text, VStack, Box } from "@chakra-ui/react";
import { COMMON_MAX_WIDTH } from "@/constants/shared/ui";

import styles from "@/styles/GradientBackground.module.css";

interface HeroHeaderProps {
  title: string;
  titleHighlight?: string;
  description?: string;
  children?: React.ReactNode;
  background?: string;
  titleColor?: string;
  highlightColor?: string;
  descriptionColor?: string;
}

export default function HeroHeader({
  title,
  titleHighlight,
  description,
  children,
  background = "transparent",
  titleColor,
  highlightColor = "purple.400",
  descriptionColor,
}: HeroHeaderProps) {
  const defaultTitleColor = "gray.800";
  const defaultDescriptionColor = "gray.600";

  return (
    <Box className={styles.radialGradient} w="full">
      <Container
        maxW={COMMON_MAX_WIDTH}
        minH="100vh"
        bg={background}
        px={{ base: 4, md: 8 }}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          minH="100vh"
          textAlign="center"
        >
          <VStack spacing={{ base: 6, md: 8 }} maxW="4xl" mx="auto" w="full">
            {/* Title Section */}
            <VStack spacing={{ base: 4, md: 6 }}>
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                lineHeight="1.1"
                color={titleColor || defaultTitleColor}
                letterSpacing="tight"
              >
                {title}{" "}
                {titleHighlight && (
                  <Text
                    as="span"
                    bgGradient={`linear(to-r, ${highlightColor}, ${highlightColor})`}
                    bgClip="text"
                    fontWeight="extrabold"
                  >
                    {titleHighlight}
                  </Text>
                )}
              </Heading>

              {/* Description */}
              {description && (
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color={descriptionColor || defaultDescriptionColor}
                  maxW="3xl"
                  lineHeight="1.6"
                  fontWeight="medium"
                >
                  {description}
                </Text>
              )}
            </VStack>

            {/* Custom Content Area */}
            {children && (
              <Flex
                w="full"
                mt={{ base: 8, md: 12 }}
                justify="center"
                align="center"
              >
                {children}
              </Flex>
            )}
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}
