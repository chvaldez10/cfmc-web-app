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
import { MdLocationOn, MdDateRange, MdInfo } from "react-icons/md";
import { formatLocalDateTimeToHumanReadable } from "@/utils/dateUtils";

interface EventDetailsProps {
  startDate: string;
  endDate: string;
  address: string;
  status?: string;
}

const EventDetails = ({
  startDate,
  endDate,
  address,
  status,
}: EventDetailsProps) => {
  const cardBg = "white";
  const borderColor = "gray.200";
  const headingColor = "gray.800";
  const labelColor = "gray.700";
  const textColor = "gray.600";
  const iconBg = "gray.50";

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
      p={{ base: 6, md: 8 }}
      borderRadius="2xl"
      border="1px"
      borderColor={borderColor}
      boxShadow="xl"
    >
      <VStack align="start" spacing={6}>
        <Heading
          as="h3"
          size="lg"
          color={headingColor}
          fontWeight="bold"
          mb={2}
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: 0,
            width: "60px",
            height: "3px",
            bg: "purple.600",
            borderRadius: "full",
          }}
        >
          Event Details
        </Heading>

        {/* Date & Time */}
        <VStack align="start" spacing={3} w="full" pt={4}>
          <HStack spacing={4}>
            <Box
              p={3}
              bg={iconBg}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={MdDateRange} color={labelColor} boxSize={5} />
            </Box>
            <VStack align="start" spacing={1}>
              <Text
                fontWeight="bold"
                fontSize="sm"
                color={labelColor}
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
        <VStack align="start" spacing={3} w="full">
          <HStack spacing={4}>
            <Box
              p={3}
              bg={iconBg}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={MdLocationOn} color={labelColor} boxSize={5} />
            </Box>
            <VStack align="start" spacing={1}>
              <Text
                fontWeight="bold"
                fontSize="sm"
                color={labelColor}
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
      </VStack>
    </Box>
  );
};

export default EventDetails;
