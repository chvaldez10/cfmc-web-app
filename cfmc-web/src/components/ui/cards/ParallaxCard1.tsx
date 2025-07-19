"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { MotionStyle } from "framer-motion";

import { AboutContentItem } from "@/constants/shared/about";

interface AnimatedContentCardProps {
  content: AboutContentItem;
  colorScheme: "purple" | "green" | "red";
  motionStyle: MotionStyle;
  maxW?: string;
}

const ParallaxCard1 = ({
  content,
  colorScheme,
  motionStyle,
  maxW = "4xl",
}: AnimatedContentCardProps) => {
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <motion.div style={motionStyle}>
      <Box
        bg={cardBg}
        p={{ base: 6, md: 8 }}
        borderRadius="xl"
        boxShadow="xl"
        borderLeft="4px solid"
        borderLeftColor={`${colorScheme}.500`}
        maxW={maxW}
        mx="auto"
      >
        <VStack spacing={4} align="start">
          <HStack spacing={3}>
            <Box w="3" h="8" bg={`${colorScheme}.500`} borderRadius="full" />
            <Heading as="h3" size="lg" color={`${colorScheme}.600`}>
              {content.title}
            </Heading>
          </HStack>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
            color="gray.700"
          >
            {content.description}
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default ParallaxCard1;
