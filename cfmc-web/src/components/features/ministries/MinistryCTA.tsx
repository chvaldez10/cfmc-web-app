"use client";

import { Box, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import { MINISTRIES_CTA_CONTENT } from "@/constants/shared/ministries";

export default function MinistryCTA() {
  return (
    <Box
      w="full"
      bg="white"
      borderRadius="3xl"
      border="3px solid"
      borderColor="brand.200"
      p={{ base: 8, md: 12, lg: 16 }}
      position="relative"
      overflow="hidden"
      mt={{ base: 8, md: 12 }}
      sx={{
        "@keyframes ctaFadeIn": {
          from: {
            opacity: 0,
            transform: "translateY(40px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        animation: "ctaFadeIn 0.8s ease-out 0.5s both",
      }}
    >
      {/* Animated Background Gradient */}
      <Box
        position="absolute"
        top="-50%"
        left="-25%"
        w="150%"
        h="200%"
        bgGradient="linear(135deg, brand.50, purple.50, blue.50, green.50)"
        opacity="0.3"
        sx={{
          "@keyframes rotateGradient": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          animation: "rotateGradient 20s linear infinite",
        }}
      />

      {/* Decorative Circles */}
      <Box
        position="absolute"
        top="20%"
        right="10%"
        w={{ base: "100px", md: "150px" }}
        h={{ base: "100px", md: "150px" }}
        borderRadius="50%"
        border="3px solid"
        borderColor="brand.200"
        opacity="0.3"
        sx={{
          "@keyframes pulse": {
            "0%, 100%": { transform: "scale(1)", opacity: 0.3 },
            "50%": { transform: "scale(1.1)", opacity: 0.5 },
          },
          animation: "pulse 3s ease-in-out infinite",
        }}
      />
      <Box
        position="absolute"
        bottom="15%"
        left="15%"
        w={{ base: "80px", md: "120px" }}
        h={{ base: "80px", md: "120px" }}
        borderRadius="50%"
        border="3px solid"
        borderColor="purple.200"
        opacity="0.2"
        sx={{
          animation: "pulse 4s ease-in-out infinite 1s",
        }}
      />

      <VStack
        spacing={{ base: 6, md: 8 }}
        position="relative"
        zIndex={1}
        textAlign="center"
      >
        <VStack spacing={3}>
          <Heading
            as="h3"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="900"
            color="gray.800"
          >
            Ready to{" "}
            <Box
              as="span"
              bgGradient="linear(to-r, brand.500, purple.600)"
              bgClip="text"
            >
              {MINISTRIES_CTA_CONTENT.headingHighlight}
            </Box>
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            color="gray.600"
            maxW="2xl"
            lineHeight="tall"
          >
            {MINISTRIES_CTA_CONTENT.description}
          </Text>
        </VStack>

        <HStack
          spacing={4}
          flexWrap="wrap"
          justify="center"
          pt={{ base: 2, md: 4 }}
        >
          <Button
            as={NextLink}
            href={MINISTRIES_CTA_CONTENT.primaryButtonLink}
            size="lg"
            bgGradient="linear(to-r, brand.500, purple.600)"
            color="white"
            px={8}
            py={6}
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="700"
            borderRadius="xl"
            rightIcon={<FaArrowRight />}
            _hover={{
              bgGradient: "linear(to-r, brand.600, purple.700)",
              transform: "translateY(-2px)",
              boxShadow: "xl",
            }}
            _active={{
              transform: "translateY(0)",
            }}
            transition="all 0.2s"
            sx={{
              "@keyframes buttonPulse": {
                "0%, 100%": {
                  boxShadow: "0 0 0 0 rgba(128, 90, 213, 0.4)",
                },
                "50%": { boxShadow: "0 0 0 8px rgba(128, 90, 213, 0)" },
              },
              animation: "buttonPulse 2s ease-in-out infinite",
            }}
          >
            {MINISTRIES_CTA_CONTENT.primaryButtonText}
          </Button>

          <Button
            as={NextLink}
            href={MINISTRIES_CTA_CONTENT.secondaryButtonLink}
            size="lg"
            variant="outline"
            colorScheme="brand"
            px={8}
            py={6}
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="700"
            borderRadius="xl"
            borderWidth="2px"
            _hover={{
              bg: "brand.50",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            _active={{
              transform: "translateY(0)",
            }}
            transition="all 0.2s"
          >
            {MINISTRIES_CTA_CONTENT.secondaryButtonText}
          </Button>
        </HStack>

        {/* Additional Info */}
        <Text fontSize="sm" color="gray.500" fontStyle="italic" pt={2}>
          {MINISTRIES_CTA_CONTENT.helperText}
        </Text>
      </VStack>
    </Box>
  );
}
