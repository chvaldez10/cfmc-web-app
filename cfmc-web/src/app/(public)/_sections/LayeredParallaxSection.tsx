"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
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
                Love & Compassion
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                We demonstrate God's love through acts of compassion, kindness,
                and service to our community. Every interaction is an
                opportunity to reflect Christ's unconditional love and grace.
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
                Service & Ministry
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                Through various ministries and outreach programs, we serve our
                community with dedication and purpose. Each ministry is designed
                to meet spiritual, emotional, and physical needs.
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
                Prayer & Worship
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                Our worship services are centered on God's Word, filled with
                prayer, and designed to draw us closer to Christ. We believe in
                the power of corporate worship and individual prayer.
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
                Faith & Discipleship
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                We are committed to growing in faith and making disciples.
                Through Bible study, fellowship, and mentoring, we help each
                other mature in Christ and live out our faith daily.
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
              [0.75, 0.85, 0.95],
              [0, 1, 1]
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
                Join Our Community
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                color="gray.700"
              >
                Experience the love, fellowship, and spiritual growth that comes
                from being part of our church family. We welcome you to join us
                in worship, service, and discipleship.
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
