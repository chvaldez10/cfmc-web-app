"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { useRef } from "react";
import { COMMON_MAX_WIDTH } from "@/constants/theme/ui";
import { FiCamera, FiVideo, FiMusic } from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { DecorativeFloatingShapes } from "@/components/ui/decorative";

const mediaIcons = [
  { icon: FiCamera, label: "Photos", delay: "0s" },
  { icon: FiVideo, label: "Videos", delay: "0.1s" },
  { icon: FiMusic, label: "Music", delay: "0.2s" },
  { icon: HiComputerDesktop, label: "Presentations", delay: "0.3s" },
];

export default function MediaHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={containerRef}
      position="relative"
      minH={{ base: "100vh", md: "90vh" }}
      bg="var(--color-light-100)"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Animated Background Gradient Orbs */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        w={{ base: "250px", md: "400px" }}
        h={{ base: "250px", md: "400px" }}
        borderRadius="50%"
        bgGradient="radial(brand.100, transparent)"
        opacity="0.6"
        filter="blur(60px)"
        sx={{
          "@keyframes float": {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(30px, -30px)" },
          },
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <Box
        position="absolute"
        bottom="15%"
        right="8%"
        w={{ base: "200px", md: "350px" }}
        h={{ base: "200px", md: "350px" }}
        borderRadius="50%"
        bgGradient="radial(purple.100, transparent)"
        opacity="0.5"
        filter="blur(60px)"
        sx={{
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Decorative Floating Shapes */}
      <DecorativeFloatingShapes />

      {/* Hero Content */}
      <Container maxW={COMMON_MAX_WIDTH} px={{ base: 6, md: 8 }} zIndex={1}>
        <VStack spacing={{ base: 6, md: 8 }} align="center" textAlign="center">
          {/* Main Heading with Animation */}
          <Box
            sx={{
              "@keyframes slideInDown": {
                from: {
                  opacity: 0,
                  transform: "translateY(-30px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="900"
              lineHeight="1.1"
              color="gray.800"
              sx={{
                animation: "slideInDown 0.8s ease-out",
              }}
            >
              Media{" "}
              <Box
                as="span"
                bgGradient="linear(to-r, brand.400, purple.500)"
                bgClip="text"
              >
                Inquiry
              </Box>{" "}
            </Heading>
          </Box>

          {/* Icon Grid */}
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={{ base: 6, md: 8 }}
            w="full"
            maxW="4xl"
            pt={{ base: 8, md: 12 }}
            sx={{
              "@keyframes scaleIn": {
                from: {
                  opacity: 0,
                  transform: "scale(0.8)",
                },
                to: {
                  opacity: 1,
                  transform: "scale(1)",
                },
              },
            }}
          >
            {mediaIcons.map((item) => (
              <VStack
                key={item.label}
                spacing={3}
                p={{ base: 5, md: 6 }}
                bg="white"
                borderRadius="2xl"
                border="2px solid"
                borderColor="brand.100"
                boxShadow="lg"
                transition="all 0.3s ease"
                cursor="pointer"
                sx={{
                  animation: `scaleIn 0.6s ease-out ${item.delay} both`,
                }}
                _hover={{
                  transform: "translateY(-8px) scale(1.05)",
                  borderColor: "brand.300",
                  boxShadow: "2xl",
                  bg: "brand.50",
                }}
              >
                <Icon
                  as={item.icon}
                  boxSize={{ base: 8, md: 10 }}
                  color="brand.500"
                />
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="600"
                  textAlign="center"
                  color="gray.700"
                >
                  {item.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>

          {/* Scroll Indicator */}
          <Box
            pt={{ base: 12, md: 16 }}
            sx={{
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(10px)",
                },
              },
            }}
          >
            <VStack spacing={2} opacity="0.7">
              <Text
                fontSize="sm"
                fontWeight="600"
                letterSpacing="wider"
                color="brand.600"
              >
                SCROLL TO REQUEST
              </Text>
              <Box
                w="6px"
                h="10"
                border="2px solid"
                borderColor="brand.400"
                borderRadius="full"
                position="relative"
                sx={{
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "4px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "2px",
                    height: "8px",
                    bg: "brand.400",
                    borderRadius: "full",
                    animation: "bounce 2s infinite",
                  },
                }}
              />
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Gradient Overlay at Bottom */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="100px"
        bgGradient="linear(to-t, var(--color-light-100), transparent)"
      />
    </Box>
  );
}
