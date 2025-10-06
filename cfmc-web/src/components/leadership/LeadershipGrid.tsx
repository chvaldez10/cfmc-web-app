import React from "react";
import { VStack, Divider } from "@chakra-ui/react";
import {
  LEADERSHIP_CONTENT_INTROS,
  PastoralTeam,
} from "@/data/mock/leadership";
import { ProfileSection } from "./ProfileSection";

export const LeadershipGrid = () => {
  // Filter members by category
  const boardMembers = PastoralTeam.filter(
    (member) => member.isBoardMember && member.isActive
  );

  const ministerialTeamOnly = PastoralTeam.filter(
    (member) =>
      member.isMinisterialTeam && !member.isBoardMember && member.isActive
  );

  return (
    <VStack spacing={16} w="100%">
      {/* Board Members Section */}
      <ProfileSection title="Pastoral Team" members={boardMembers} />

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
