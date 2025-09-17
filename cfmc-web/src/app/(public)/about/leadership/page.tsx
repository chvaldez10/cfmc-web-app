import React from "react";
import { ColumnLayout } from "@/components/hero";
import { SectionHeader } from "@/components/ui/headers";
import { LEADERSHIP_CONTENT_INTROS } from "@/data/mock/leadership";

export default function HistoryPage() {
  return (
    <ColumnLayout
      maxW="5xl"
      justifyContent="flex-start"
      textAlign="left"
      minH="auto"
    >
      <SectionHeader
        title={LEADERSHIP_CONTENT_INTROS[0].title}
        description={LEADERSHIP_CONTENT_INTROS[0].description}
      />
    </ColumnLayout>
  );
}
