import React from "react";
import { ColumnLayout, HeroHeader } from "@/components/hero";
import { LEADERSHIP_CONTENT_INTROS } from "@/data/mock/leadership";
import { LeadershipGrid } from "@/components/leadership";

export default function LeadershipPage() {
  return (
    <>
      <HeroHeader
        title="Pastors and"
        titleHighlight="Leaders"
        description={
          "Committed to guiding hearts, growing disciples, and glorifying God through faithful leadership."
        }
      />
      <ColumnLayout
        maxW="5xl"
        justifyContent="flex-start"
        textAlign="left"
        minH="auto"
      >
        <LeadershipGrid />
      </ColumnLayout>
    </>
  );
}
