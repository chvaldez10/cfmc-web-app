"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { MinistryCard, MinistryCTA } from "@/components/features/ministries";
import { MINISTRIES_SHOWCASE } from "@/constants/shared/ministries";

const MinistriesShowcase = () => {
  return (
    <Box
      bg="var(--color-light-100)"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 24, lg: 32 }}
    >
      {/* Decorative Background Elements */}
      <Box
        position="absolute"
        top="10%"
        left="-5%"
        w={{ base: "200px", md: "400px" }}
        h={{ base: "200px", md: "400px" }}
        borderRadius="50%"
        bgGradient="radial(purple.100, transparent)"
        opacity="0.4"
        filter="blur(60px)"
        sx={{
          "@keyframes floatSlow": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "50%": { transform: "translate(20px, -20px) scale(1.1)" },
          },
          animation: "floatSlow 12s ease-in-out infinite",
        }}
      />
      <Box
        position="absolute"
        bottom="20%"
        right="-5%"
        w={{ base: "250px", md: "500px" }}
        h={{ base: "250px", md: "500px" }}
        borderRadius="50%"
        bgGradient="radial(blue.100, transparent)"
        opacity="0.3"
        filter="blur(60px)"
        sx={{
          animation: "floatSlow 15s ease-in-out infinite reverse",
        }}
      />

      <Container
        maxW="7xl"
        px={{ base: 6, md: 8 }}
        position="relative"
        zIndex={1}
      >
        <VStack spacing={{ base: 12, md: 16, lg: 20 }}>
          {/* Section Header */}
          <VStack
            spacing={4}
            textAlign="center"
            maxW="3xl"
            sx={{
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(30px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="900"
              color="gray.800"
              lineHeight="1.2"
            >
              Discover Our{" "}
              <Box
                as="span"
                bgGradient="linear(to-r, brand.400, purple.500)"
                bgClip="text"
              >
                Ministries
              </Box>
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              lineHeight="tall"
            >
              Join a community where faith grows, friendships flourish, and
              lives are transformed through service and worship.
            </Text>
          </VStack>

          {/* Ministry Cards Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 6, md: 8 }}
            w="full"
          >
            {MINISTRIES_SHOWCASE.map((ministry, index) => (
              <MinistryCard
                key={ministry.id}
                ministry={ministry}
                delay={`${index * 0.1}s`}
              />
            ))}
          </SimpleGrid>

          {/* CTA Section */}
          <MinistryCTA />
        </VStack>
      </Container>
    </Box>
  );
};

export default MinistriesShowcase;
