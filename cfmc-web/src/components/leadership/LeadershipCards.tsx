import React from "react";
import { VStack } from "@chakra-ui/react";
import { ChurchMembers } from "@/types/supabase/members";
import { ProfileCard } from "./ProfileCard";
import { SectionHeader } from "@/components/ui/headers";

interface LeadershipCardsProps {
  title: string;
  description?: string;
  members: ChurchMembers[];
}

export const LeadershipCards = ({
  title,
  description,
  members,
}: LeadershipCardsProps) => {
  if (members.length === 0) {
    return null;
  }

  return (
    <VStack>
      <SectionHeader title={title} description={description} />

      <VStack spacing={8}>
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
