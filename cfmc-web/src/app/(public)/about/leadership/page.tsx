import React from "react";
import { Metadata } from "next";
import { ColumnLayout, HeroHeader } from "@/components/hero";
import { LEADERSHIP_CONTENT_INTROS } from "@/data/mock/leadership";
import { LeadershipCards } from "@/components/leadership";
import { PastoralTeam } from "@/data/mock/leadership";
import { generatePageMetadata } from "@/utils/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Leadership",
  description:
    "Meet the pastoral team and board members of Calgary Filipino Methodist Church. Learn about our dedicated leaders serving the congregation.",
  path: "/about/leadership",
  keywords: [
    "church leadership",
    "pastoral team",
    "board members",
    "church staff",
    "ministry leaders",
  ],
});

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
