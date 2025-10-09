"use client";

import { Box, VStack, Heading, Text, Icon } from "@chakra-ui/react";
import { MinistryCardData } from "@/constants/shared/ministries";

interface MinistryCardProps {
  ministry: MinistryCardData;
  delay?: string;
}

export default function MinistryCard({
  ministry,
  delay = "0s",
}: MinistryCardProps) {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      border="2px solid"
      borderColor={ministry.borderColor}
      p={{ base: 6, md: 8 }}
      position="relative"
      overflow="hidden"
      transition="all 0.3s ease"
      sx={{
        "@keyframes cardFadeIn": {
          from: {
            opacity: 0,
            transform: "translateY(20px) scale(0.95)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0) scale(1)",
          },
        },
        animation: `cardFadeIn 0.6s ease-out ${delay} both`,
      }}
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "2xl",
        borderColor: ministry.iconColor,
      }}
    >
      {/* Gradient Background */}
      <Box
        position="absolute"
        top="0"
        right="0"
        w="150px"
        h="150px"
        bgGradient={ministry.bgGradient}
        opacity="0.5"
        borderBottomLeftRadius="full"
        transition="all 0.3s ease"
        _groupHover={{
          opacity: 0.7,
          transform: "scale(1.2)",
        }}
      />

      <VStack align="start" spacing={4} position="relative" zIndex={1}>
        {/* Icon */}
        <Box
          bg={`${ministry.iconColor.split(".")[0]}.50`}
          p={4}
          borderRadius="xl"
          border="2px solid"
          borderColor={ministry.borderColor}
        >
          <Icon
            as={ministry.icon}
            boxSize={{ base: 6, md: 8 }}
            color={ministry.iconColor}
          />
        </Box>

        {/* Title */}
        <Heading
          as="h3"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="700"
          color="gray.800"
        >
          {ministry.title}
        </Heading>

        {/* Description */}
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="gray.600"
          lineHeight="tall"
        >
          {ministry.description}
        </Text>
      </VStack>
    </Box>
  );
}
