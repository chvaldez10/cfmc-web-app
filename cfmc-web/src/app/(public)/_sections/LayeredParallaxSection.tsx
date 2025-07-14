"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import {
  FaHeart,
  FaHandsHelping,
  FaPrayingHands,
  FaCross,
} from "react-icons/fa";

import { ministries } from "@/constants/ministries";

const LayeredParallaxSection = () => {
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
      position="relative"
      overflow="hidden"
      minH="250vh"
    >
      {/* Background gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-b, purple.50, blue.50, green.50)"
        opacity="0.3"
        zIndex="0"
      />

      <Container
        maxW="7xl"
        px={{ base: 4, md: 8 }}
        position="relative"
        zIndex="1"
      >
        {/* Section 1: Love & Compassion */}
        <motion.div
          style={{
            position: "sticky",
            top: "20vh",
            zIndex: 4,
            y: useTransform(scrollYProgress, [0, 0.25], [0, -100]),
            opacity: useTransform(
              scrollYProgress,
              [0, 0.15, 0.35, 0.5],
              [1, 1, 0.8, 0]
            ),
          }}
        >
          <Box
            bg={cardBg}
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            boxShadow="2xl"
            border="2px solid"
            borderColor="purple.200"
            maxW="4xl"
            mx="auto"
            mb="20vh"
          >
            <VStack spacing={6} align="center" textAlign="center">
              <Icon as={FaHeart} w={12} h={12} color="red.500" />
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                color="purple.600"
              >
                {ministries.DISCIPLESHIP.title}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                {ministries.DISCIPLESHIP.description}
              </Text>
            </VStack>
          </Box>
        </motion.div>

        {/* Section 2: Service & Ministry */}
        <motion.div
          style={{
            position: "sticky",
            top: "15vh",
            zIndex: 3,
            y: useTransform(scrollYProgress, [0.15, 0.45], [100, -50]),
            opacity: useTransform(
              scrollYProgress,
              [0.15, 0.35, 0.55, 0.75],
              [0, 1, 1, 0.8]
            ),
          }}
        >
          <Box
            bg={cardBg}
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            boxShadow="2xl"
            border="2px solid"
            borderColor="blue.200"
            maxW="4xl"
            mx="auto"
            mb="20vh"
          >
            <VStack spacing={6} align="center" textAlign="center">
              <Icon as={FaHandsHelping} w={12} h={12} color="blue.500" />
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                color="blue.600"
              >
                {ministries.MENS_FELLOWSHIP.title}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                {ministries.MENS_FELLOWSHIP.description}
              </Text>
            </VStack>
          </Box>
        </motion.div>

        {/* Section 3: Prayer & Worship */}
        <motion.div
          style={{
            position: "sticky",
            top: "10vh",
            zIndex: 2,
            y: useTransform(scrollYProgress, [0.35, 0.65], [150, -100]),
            opacity: useTransform(
              scrollYProgress,
              [0.35, 0.55, 0.75, 0.85],
              [0, 1, 1, 0.6]
            ),
          }}
        >
          <Box
            bg={cardBg}
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            boxShadow="2xl"
            border="2px solid"
            borderColor="green.200"
            maxW="4xl"
            mx="auto"
            mb="20vh"
          >
            <VStack spacing={6} align="center" textAlign="center">
              <Icon as={FaPrayingHands} w={12} h={12} color="green.500" />
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                color="green.600"
              >
                {ministries.WOMENS_FELLOWSHIP.title}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                {ministries.WOMENS_FELLOWSHIP.description}
              </Text>
            </VStack>
          </Box>
        </motion.div>

        {/* Section 4: Faith & Discipleship */}
        <motion.div
          style={{
            position: "sticky",
            top: "5vh",
            zIndex: 1,
            y: useTransform(scrollYProgress, [0.55, 0.85], [200, -150]),
            opacity: useTransform(
              scrollYProgress,
              [0.55, 0.75, 0.85, 0.95],
              [0, 1, 1, 0.4]
            ),
          }}
        >
          <Box
            bg={cardBg}
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            boxShadow="2xl"
            border="2px solid"
            borderColor="purple.300"
            maxW="4xl"
            mx="auto"
            mb="20vh"
          >
            <VStack spacing={6} align="center" textAlign="center">
              <Icon as={FaCross} w={12} h={12} color="purple.500" />
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                color="purple.600"
              >
                {ministries.CHILDREN.title}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                {ministries.CHILDREN.description}
              </Text>
            </VStack>
          </Box>
        </motion.div>

        {/* Final call-to-action section */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0.75, 0.95], [100, 0]),
            opacity: useTransform(
              scrollYProgress,
              [0, 0.1, 0.8, 1],
              [0, 1, 1, 0]
            ),
          }}
        >
          <Box
            bg={cardBg}
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            boxShadow="2xl"
            border="2px solid"
            borderColor="blue.300"
            maxW="4xl"
            mx="auto"
            textAlign="center"
            mb="20vh"
          >
            <VStack spacing={6}>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                color="blue.600"
              >
                {ministries.OUTREACH.title}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                {ministries.OUTREACH.description}
              </Text>
            </VStack>
          </Box>
        </motion.div>
      </Container>

      {/* Floating background elements */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "var(--chakra-colors-purple-200)",
          opacity: 0.2,
          zIndex: 0,
          y: useTransform(scrollYProgress, [0, 1], [0, -300]),
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "var(--chakra-colors-blue-200)",
          opacity: 0.2,
          zIndex: 0,
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "20%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: "var(--chakra-colors-green-200)",
          opacity: 0.15,
          zIndex: 0,
          y: useTransform(scrollYProgress, [0, 1], [0, -150]),
        }}
      />
    </Box>
  );
};

export default LayeredParallaxSection;

// 1. Control When Element Appears/Disappears:
// // Appears early, disappears late
// opacity: useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0])

// // Appears late, disappears early
// opacity: useTransform(scrollYProgress, [0, 0.5, 0.6, 1], [0, 1, 1, 0])

// // Stays visible longer
// opacity: useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

// 2. Control Movement Speed:
// // Moves faster (larger range)
// y: useTransform(scrollYProgress, [0, 1], [0, -200])

// // Moves slower (smaller range)
// y: useTransform(scrollYProgress, [0, 1], [0, -50])

// // Moves in opposite direction
// y: useTransform(scrollYProgress, [0, 1], [0, 100])

// 3. Control Movement Timing:
// // Moves early in scroll
// y: useTransform(scrollYProgress, [0, 0.5], [0, -100])

// // Moves late in scroll
// y: useTransform(scrollYProgress, [0.5, 1], [0, -100])

// // Moves in middle of scroll
// y: useTransform(scrollYProgress, [0.3, 0.7], [0, -100])

// 4. Create Different Effects:
// // Fade in only (no fade out)
// opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1])

// // Fade out only (no fade in)
// opacity: useTransform(scrollYProgress, [0.7, 1], [1, 0])

// // Quick flash effect
// opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0])
