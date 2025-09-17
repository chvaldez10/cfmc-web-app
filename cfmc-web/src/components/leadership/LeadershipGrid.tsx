import React from "react";
import { VStack, Divider } from "@chakra-ui/react";
import {
  LEADERSHIP_CONTENT_INTROS,
  LeadershipMembers,
} from "@/data/mock/leadership";
import { ProfileSection } from "./ProfileSection";

export const LeadershipGrid = () => {
  // Filter members by category
  const boardMembers = LeadershipMembers.filter(
    (member) => member.isBoardMember && member.isActive
  );

  const ministerialTeamOnly = LeadershipMembers.filter(
    (member) =>
      member.isMinisterialTeam && !member.isBoardMember && member.isActive
  );

  return (
    <VStack spacing={16} w="100%">
      {/* Board Members Section */}
      <ProfileSection
        title="Board Members"
        description={LEADERSHIP_CONTENT_INTROS[0].description}
        members={boardMembers}
      />

      {/* Divider */}
      {ministerialTeamOnly.length > 0 && (
        <Divider borderColor="purple.200" borderWidth="2px" maxW="200px" />
      )}

      {/* Ministerial Team Section */}
      <ProfileSection
        title="Ministerial Team"
        description={LEADERSHIP_CONTENT_INTROS[1].description}
        members={ministerialTeamOnly}
      />
    </VStack>
  );
};
