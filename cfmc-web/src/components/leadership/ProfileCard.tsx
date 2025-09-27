"use client";

import React from "react";
import {
  Card,
  CardBody,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Flex,
  Icon,
  Box,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { ChurchMembers } from "@/types/supabase/members";

interface ProfileCardProps {
  member: ChurchMembers;
}

export const ProfileCard = ({ member }: ProfileCardProps) => {
  const displayName = `${member.firstName} ${member.lastName}${
    member.suffix ? ` ${member.suffix}` : ""
  }`;
  const username = member.username ? `(${member.username})` : "";

  return (
    <Card
      bg="white"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: "purple.200",
      }}
      overflow="hidden"
      height="100%"
    >
      {/* Gradient Header */}
      <Box
        bgGradient="linear(to-r, purple.600, purple.400, white)"
        h="80px"
        position="relative"
      />

      <CardBody p={6} mt="-40px" position="relative">
        {/* Profile Icon */}
        <Flex justify="center" mb={4}>
          <Box
            bg="white"
            borderRadius="full"
            p={4}
            border="4px solid"
            borderColor="purple.100"
            boxShadow="md"
          >
            <Icon as={FaUser} w={8} h={8} color="purple.600" />
          </Box>
        </Flex>

        <VStack spacing={3} textAlign="center" minH="120px">
          {/* Name Section - Always present */}
          <VStack spacing={1}>
            <Heading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              color="gray.800"
              lineHeight="tight"
            >
              {displayName}
            </Heading>
            {username && (
              <Text fontSize="sm" color="purple.600" fontWeight="medium">
                {username}
              </Text>
            )}
          </VStack>

          {/* Role - Always present */}
          <Text
            fontSize="md"
            color="purple.700"
            fontWeight="semibold"
            textAlign="center"
          >
            {member.role}
          </Text>

          {/* Headline - Conditional but with placeholder space */}
          <Box minH="20px">
            {member.headline && (
              <Text
                fontSize="sm"
                color="gray.600"
                textAlign="center"
                fontStyle="italic"
              >
                {member.headline}
              </Text>
            )}
          </Box>

          {/* Badges - Always rendered with consistent height */}
          <HStack
            spacing={2}
            flexWrap="wrap"
            justify="center"
            minH="32px"
            align="center"
          >
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
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
