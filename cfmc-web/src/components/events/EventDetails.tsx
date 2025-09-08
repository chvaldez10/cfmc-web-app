"use client";

import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { FaCalendar, FaInfoCircle } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { formatLocalDateTimeToHumanReadable } from "@/utils/dateUtils";

interface EventDetailsProps {
  startDate: string;
  endDate: string;
  address: string;
  status: string;
}

const EventDetails = ({
  startDate,
  endDate,
  address,
  status,
}: EventDetailsProps) => {
  const cardBg = "white";
  const borderColor = "gray.200";
  const accentColor = "purple.600";
  const textColor = "gray.700";
  const iconBg = "purple.50";

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = formatLocalDateTimeToHumanReadable(startDate);
    const end = formatLocalDateTimeToHumanReadable(endDate);

    const startDateOnly = start.split(" at")[0];
    const endDateOnly = end.split(" at")[0];

    if (startDateOnly === endDateOnly) {
      return `${start} - ${end.split(" at")[1]}`;
    }
    return `${start} - ${end}`;
  };

  return (
    <Box
      bg={cardBg}
      p={8}
      borderRadius="2xl"
      border="1px"
      borderColor={borderColor}
      boxShadow="xl"
      top={8}
      backdropFilter="blur(10px)"
      _hover={{
        boxShadow: "2xl",
        transform: "translateY(-2px)",
        transition: "all 0.3s ease",
      }}
    >
      <VStack align="start" gap={8}>
        <Heading
          as="h3"
          size="lg"
          color={accentColor}
          fontWeight="bold"
          textAlign="center"
          w="full"
          pb={4}
          borderBottom="2px solid"
          borderBottomColor="purple.100"
          _dark={{ borderBottomColor: "purple.800" }}
        >
          Event Details
        </Heading>

        {/* Date & Time */}
        <VStack align="start" gap={4} w="full">
          <HStack gap={4}>
            <Box
              p={3}
              bg={iconBg}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaCalendar} color={accentColor} boxSize={5} />
            </Box>
            <VStack align="start" gap={1}>
              <Text
                fontWeight="bold"
                fontSize="sm"
                color={accentColor}
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Date & Time
              </Text>
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="medium"
                lineHeight="short"
              >
                {formatDateRange(startDate, endDate)}
              </Text>
            </VStack>
          </HStack>
        </VStack>

        {/* Location */}
        <VStack align="start" gap={4} w="full">
          <HStack gap={4}>
            <Box
              p={3}
              bg={iconBg}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={MdLocationOn} color={accentColor} boxSize={5} />
            </Box>
            <VStack align="start" gap={1}>
              <Text
                fontWeight="bold"
                fontSize="sm"
                color={accentColor}
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Location
              </Text>
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="medium"
                lineHeight="short"
              >
                {address}
              </Text>
            </VStack>
          </HStack>
        </VStack>

        {/* Event Status */}
        <VStack align="start" gap={4} w="full">
          <HStack gap={4}>
            <Box
              p={3}
              bg={iconBg}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaInfoCircle} color={accentColor} boxSize={5} />
            </Box>
            <VStack align="start" gap={1}>
              <Text
                fontWeight="bold"
                fontSize="sm"
                color={accentColor}
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Status
              </Text>
              <Badge
                colorScheme="green"
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="full"
                fontWeight="semibold"
              >
                {status}
              </Badge>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default EventDetails;
