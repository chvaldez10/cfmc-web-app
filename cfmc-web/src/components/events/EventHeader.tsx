"use client";

import {
  VStack,
  HStack,
  Badge,
  Heading,
  useColorModeValue,
  Box,
  Text,
} from "@chakra-ui/react";

interface EventHeaderProps {
  name: string;
  category: string;
  tags: string[];
  description: string;
  organizerName: string;
}

const EventHeader = ({
  name,
  category,
  tags,
  description,
  organizerName,
}: EventHeaderProps) => {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const accentColor = useColorModeValue("purple.600", "purple.300");
  const descriptionColor = useColorModeValue("gray.600", "gray.300");

  return (
    <VStack align="start" spacing={8} w="full">
      {/* Header Section */}
      <VStack align="start" spacing={6} w="full">
        <HStack wrap="wrap" spacing={3}>
          <Badge
            colorScheme="purple"
            fontSize="sm"
            px={4}
            py={2}
            borderRadius="full"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            {category}
          </Badge>
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              colorScheme="gray"
              fontSize="sm"
              px={3}
              py={1}
              borderRadius="full"
              fontWeight="medium"
            >
              #{tag}
            </Badge>
          ))}
        </HStack>

        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl", lg: "4xl" }}
          color={accentColor}
          fontWeight="black"
          lineHeight="shorter"
          letterSpacing="tight"
          bgGradient={`linear(to-r, ${accentColor}, purple.400)`}
          bgClip="text"
          _hover={{
            bgGradient: "linear(to-r, purple.500, purple.600)",
            transform: "translateY(-1px)",
            transition: "all 0.2s ease",
          }}
        >
          {name}
        </Heading>
      </VStack>

      {/* Description Section */}
      <VStack align="start" spacing={6} w="full">
        <Box>
          <Heading
            as="h2"
            size="lg"
            color={accentColor}
            mb={4}
            fontWeight="bold"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: 0,
              width: "60px",
              height: "3px",
              bg: "purple.500",
              borderRadius: "full",
            }}
          >
            About This Event
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight="tall"
            color={descriptionColor}
            whiteSpace="pre-line"
            fontWeight="400"
            mt={6}
          >
            {description}
          </Text>
        </Box>

        {/* Organizer Information */}
        <Box
          p={6}
          bg={useColorModeValue("purple.50", "purple.900")}
          borderRadius="xl"
          borderLeft="4px solid"
          borderLeftColor="purple.500"
          w="full"
        >
          <VStack align="start" spacing={2}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="purple.600"
              _dark={{ color: "purple.300" }}
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Organized by
            </Text>
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              {organizerName}
            </Text>
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
};

export default EventHeader;
