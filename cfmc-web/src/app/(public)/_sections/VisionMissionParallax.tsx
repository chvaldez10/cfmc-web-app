"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import { ABOUT_CONTENT } from "@/constants/about";

const VisionMissionParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box
      ref={containerRef}
      bg={bgColor}
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "var(--chakra-colors-purple-100)",
          opacity: 0.1,
          y: useTransform(scrollYProgress, [0, 1], [0, -200]),
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: "var(--chakra-colors-blue-100)",
          opacity: 0.1,
          y: useTransform(scrollYProgress, [0, 1], [0, 150]),
        }}
      />

      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }} align="center">
          {/* Main Heading */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -100]),
              opacity: useTransform(
                scrollYProgress,
                [0, 0.3, 0.7, 1],
                [0, 1, 1, 0]
              ),
            }}
          >
            <Heading
              id="vision-mission-heading"
              size={{ base: "2xl", md: "4xl" }}
              textAlign="center"
              color="purple.600"
              mb={4}
            >
              Our Vision & Mission
            </Heading>
            <Divider
              borderColor="purple.300"
              borderWidth="2px"
              maxW="100px"
              mx="auto"
            />
          </motion.div>

          {/* Vision Section */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [100, -50]),
              opacity: useTransform(
                scrollYProgress,
                [0.1, 0.3, 0.7, 0.9],
                [0, 1, 1, 0]
              ),
            }}
          >
            <Box
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              boxShadow="xl"
              borderLeft="4px solid"
              borderLeftColor="purple.500"
              maxW="4xl"
              mx="auto"
            >
              <VStack spacing={4} align="start">
                <HStack spacing={3}>
                  <Box w="3" h="8" bg="purple.500" borderRadius="full" />
                  <Heading as="h3" size="lg" color="purple.600">
                    {ABOUT_CONTENT.VISION_STATEMENT.title}
                  </Heading>
                </HStack>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="tall"
                  color="gray.700"
                >
                  {ABOUT_CONTENT.VISION_STATEMENT.description}
                </Text>
              </VStack>
            </Box>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [150, -100]),
              opacity: useTransform(
                scrollYProgress,
                [0.2, 0.4, 0.6, 0.8],
                [0, 1, 1, 0]
              ),
            }}
          >
            <Box
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              boxShadow="xl"
              borderLeft="4px solid"
              borderLeftColor="blue.500"
              maxW="4xl"
              mx="auto"
            >
              <VStack spacing={4} align="start">
                <HStack spacing={3}>
                  <Box w="3" h="8" bg="blue.500" borderRadius="full" />
                  <Heading as="h3" size="lg" color="blue.600">
                    {ABOUT_CONTENT.MISSION_STATEMENT.title}
                  </Heading>
                </HStack>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="tall"
                  color="gray.700"
                >
                  {ABOUT_CONTENT.MISSION_STATEMENT.description}
                </Text>
              </VStack>
            </Box>
          </motion.div>

          {/* Statement of Commitment */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [200, -150]),
              opacity: useTransform(
                scrollYProgress,
                [0.2, 0.4, 0.6, 0.8],
                [0, 1, 1, 0]
              ),
            }}
          >
            <Box
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              boxShadow="xl"
              borderLeft="4px solid"
              borderLeftColor="green.500"
              maxW="5xl"
              mx="auto"
            >
              <VStack spacing={4} align="start">
                <HStack spacing={3}>
                  <Box w="3" h="8" bg="green.500" borderRadius="full" />
                  <Heading as="h3" size="lg" color="green.600">
                    {ABOUT_CONTENT.STATEMENT_OF_COMMITMENT.title}
                  </Heading>
                </HStack>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="tall"
                  color="gray.700"
                >
                  {ABOUT_CONTENT.STATEMENT_OF_COMMITMENT.description}
                </Text>
              </VStack>
            </Box>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
};

export default VisionMissionParallax;
