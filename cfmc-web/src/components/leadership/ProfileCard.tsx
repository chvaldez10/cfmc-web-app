"use client";

import React from "react";
import {
  Card,
  CardBody,
  VStack,
  Heading,
  Text,
  Icon,
  Box,
  Stack,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { ChurchMembers } from "@/types/supabase/members";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  member: ChurchMembers;
  delay?: string;
}

export const ProfileCard = ({ member, delay = "0s" }: ProfileCardProps) => {
  const displayName = `${
    member.suffix
      ? `${member.suffix} ${member.firstName} ${member.lastName}`
      : `${member.firstName} ${member.lastName}`
  }`;

  return (
    <Card
      className={styles.card}
      bg="white"
      borderRadius="2xl"
      border="2px solid"
      borderColor="purple.200"
      boxShadow="md"
      transition="all 0.3s ease"
      style={{ animationDelay: delay }}
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "2xl",
        borderColor: "purple.300",
      }}
      overflow="hidden"
      width="100%"
      position="relative"
    >
      {/* Gradient Background Accent */}
      <Box
        className={styles.gradientBg}
        position="absolute"
        top="0"
        right="0"
        w="200px"
        h="200px"
        bgGradient="linear(to-br, purple.300, purple.100)"
        opacity="0.3"
        borderBottomLeftRadius="full"
        pointerEvents="none"
      />

      <CardBody p={0} position="relative" zIndex={1}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={0}
          align="stretch"
        >
          {/* Left Section - Profile Info */}
          <Box flex={{ base: "none", lg: "0 0 300px" }} bg="gray.50" p={6}>
            <VStack spacing={4} align="center" justify="center" h="100%">
              {/* Profile Icon */}
              <Box
                bg="purple.50"
                borderRadius="full"
                p={4}
                border="2px solid"
                borderColor="purple.200"
                boxShadow="sm"
              >
                <Icon as={FaUser} w={10} h={10} color="purple.500" />
              </Box>

              {/* Name Section */}
              <VStack spacing={1} textAlign="center">
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.800"
                  lineHeight="tight"
                >
                  {displayName}
                </Heading>
              </VStack>

              {/* Role */}
              <Text
                fontSize="md"
                color="purple.700"
                fontWeight="semibold"
                textAlign="center"
                px={2}
              >
                {member.role}
              </Text>

              {/* Headline */}
              {member.headline && (
                <Text
                  fontSize="sm"
                  color="gray.600"
                  textAlign="center"
                  fontStyle="italic"
                  px={2}
                >
                  {member.headline}
                </Text>
              )}

              {/* Badges */}
              {/* <HStack spacing={2} flexWrap="wrap" justify="center">
                {member.isBoardMember && (
                  <Badge
                    colorScheme="purple"
                    variant="solid"
                    fontSize="xs"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    Board Member
                  </Badge>
                )}
                {member.isMinisterialTeam && (
                  <Badge
                    colorScheme="green"
                    variant="solid"
                    fontSize="xs"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    Ministerial Team
                  </Badge>
                )}
              </HStack> */}
            </VStack>
          </Box>

          {/* Right Section - Bio */}
          <Box flex="1" p={{ base: 6, md: 8 }}>
            <VStack align="stretch" spacing={4} h="100%">
              <Heading
                as="h4"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="700"
                color="gray.800"
              >
                About
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.800"
                lineHeight="tall"
                textAlign="justify"
              >
                {member.bio || "No biography available."}
              </Text>
            </VStack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
