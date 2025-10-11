import React from "react";
import { VStack } from "@chakra-ui/react";
import {
  LEADERSHIP_CONTENT_INTROS,
  PastoralTeam,
} from "@/data/mock/leadership";
import { ProfileSection } from "./ProfileSection";

export const LeadershipGrid = () => {
  return (
    <VStack spacing={16} w="100%">
      {/* Ministerial Team Section */}
      <ProfileSection
        title={LEADERSHIP_CONTENT_INTROS.PASTORAL_TEAM.title}
        description={LEADERSHIP_CONTENT_INTROS.PASTORAL_TEAM.description}
        members={PastoralTeam}
      />
    </VStack>
  );
};
