"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function EventsPage() {
  const bgColor = "gray.50";
  const accentColor = "purple.600";
  const textColor = "gray.700";

  return (
    <Box bg={bgColor} minH="100vh" py={16}>
      <Container maxW="6xl" px={{ base: 4, md: 8 }}>
        <VStack spacing={8} textAlign="center">
          <VStack spacing={6}>
            <Heading
              size="2xl"
              color={accentColor}
              fontWeight="black"
              bgGradient={`linear(to-r, ${accentColor}, purple.400)`}
              bgClip="text"
            >
              Upcoming Events
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="3xl" lineHeight="tall">
              Discover meaningful events and gatherings in our community. Join
              us for worship, fellowship, and spiritual growth.
            </Text>
          </VStack>

          <Box
            p={8}
            bg="white"
            borderRadius="2xl"
            boxShadow="xl"
            border="1px solid"
            borderColor="gray.200"
            maxW="md"
          >
            <VStack spacing={6}>
              <Heading size="lg" color={accentColor}>
                Featured Event
              </Heading>
              <Text color={textColor} textAlign="center">
                Summer Music Festival - An incredible outdoor worship experience
                featuring local and international artists.
              </Text>
              <Button
                as={Link}
                href="/events/test-event"
                colorScheme="purple"
                size="lg"
                rightIcon={<ArrowForwardIcon />}
                borderRadius="full"
                px={8}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s ease"
              >
                View Details
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
