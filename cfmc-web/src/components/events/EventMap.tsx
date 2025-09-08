"use client";

import {
  Box,
  AspectRatio,
  Heading,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface EventMapProps {
  googleMapsUrl: string;
  address: string;
}

const EventMap = ({ googleMapsUrl, address }: EventMapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const accentColor = "purple.600";
  const borderColor = "gray.200";
  const textColor = "gray.600";

  // Set loaded to true after a short delay to ensure iframe renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!googleMapsUrl) return null;

  return (
    <Box mt={8}>
      <VStack align="start" gap={6} w="full">
        <VStack align="start" gap={2}>
          <Heading
            as="h3"
            size="lg"
            color={accentColor}
            fontWeight="bold"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-6px",
              left: 0,
              width: "40px",
              height: "2px",
              bg: "purple.500",
              borderRadius: "full",
            }}
          >
            Location Map
          </Heading>
          <Text fontSize="sm" color={textColor} fontWeight="medium">
            {address}
          </Text>
        </VStack>

        <Box
          position="relative"
          w="full"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="xl"
          border="1px solid"
          borderColor={borderColor}
          transition="all 0.3s ease"
          _hover={{
            boxShadow: "2xl",
            transform: "translateY(-1px)",
          }}
        >
          <AspectRatio ratio={16 / 9}>
            <>
              {!isLoaded && (
                <Skeleton
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  borderRadius="2xl"
                  startColor="gray.100"
                  endColor="gray.300"
                  _dark={{ startColor: "gray.700", endColor: "gray.600" }}
                  zIndex={2}
                />
              )}
              <Box
                as="iframe"
                src={googleMapsUrl}
                w="full"
                h="full"
                border="none"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${address}`}
                style={{
                  border: 0,
                  borderRadius: "1rem",
                }}
              />
            </>
          </AspectRatio>
        </Box>
      </VStack>
    </Box>
  );
};

export default EventMap;
