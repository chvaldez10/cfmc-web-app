import React from "react";
import { ColumnLayout, HeroHeader } from "@/components/hero";
import { LEADERSHIP_CONTENT_INTROS } from "@/data/mock/leadership";
import { LeadershipCards } from "@/components/leadership";
import { PastoralTeam } from "@/data/mock/leadership";
import { SectionHeader } from "@/components/ui/headers";

export default function LeadershipPage() {
  return (
    <>
      <HeroHeader
        title="Board"
        titleHighlight="Members"
        description={LEADERSHIP_CONTENT_INTROS.BOARD_MEMBERS.description}
      />
      <ColumnLayout
        maxW="5xl"
        justifyContent="flex-start"
        textAlign="left"
        minH="auto"
      >
        <LeadershipCards
          title={LEADERSHIP_CONTENT_INTROS.PASTORAL_TEAM.title}
          description={LEADERSHIP_CONTENT_INTROS.PASTORAL_TEAM.description}
          members={PastoralTeam}
        />
      </ColumnLayout>
    </>
  );
}
