import React from "react";
import { Timeline } from "@/components/timeline";
import { ColumnLayout } from "@/components/hero";
import { SectionHeader } from "@/components/ui/headers";
import { HISTORY_CONTENT } from "@/constants/history";

export default function HistoryPage() {
  return (
    <ColumnLayout maxW="5xl">
      <SectionHeader
        title={HISTORY_CONTENT[0].title}
        description={HISTORY_CONTENT[0].description}
      />
      <Timeline />
    </ColumnLayout>
  );
}
