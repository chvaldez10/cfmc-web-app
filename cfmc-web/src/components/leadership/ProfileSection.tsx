import React from "react";
import { VStack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { ChurchMembers } from "@/types/supabase/members";
import { ProfileCard } from "./ProfileCard";

interface ProfileSectionProps {
  title: string;
  description: string;
  members: ChurchMembers[];
}

export const ProfileSection = ({
  title,
  description,
  members,
}: ProfileSectionProps) => {
  if (members.length === 0) {
    return null;
  }

  return (
    <VStack spacing={8} w="100%">
      <VStack spacing={4} textAlign="center" maxW="4xl">
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="bold"
          color="purple.600"
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          lineHeight="tall"
        >
          {description}
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%">
        {members.map((member, index) => (
          <ProfileCard
            key={`${member.firstName}-${member.lastName}-${index}`}
            member={member}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
