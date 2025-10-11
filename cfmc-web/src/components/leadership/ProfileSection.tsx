import React from "react";
import { VStack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { ChurchMembers } from "@/types/supabase/members";
import { ProfileCard } from "./ProfileCard";
import { SectionHeader } from "@/components/ui/headers";

interface ProfileSectionProps {
  title: string;
  description?: string;
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
      <SectionHeader title={title} description={description} />

      <VStack spacing={6} w="100%">
        {members.map((member, index) => (
          <ProfileCard
            key={`${member.firstName}-${member.lastName}-${index}`}
            member={member}
            delay={`${index * 0.1}s`}
          />
        ))}
      </VStack>
    </VStack>
  );
};
