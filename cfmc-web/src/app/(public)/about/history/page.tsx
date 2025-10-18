import React from "react";
import { Metadata } from "next";
import { Timeline } from "@/components/timeline";
import { ColumnLayout } from "@/components/hero";
import { SectionHeader } from "@/components/ui/headers";
import { HISTORY_CONTENT } from "@/constants/history";
import { generatePageMetadata } from "@/utils/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Our History",
  description:
    "Explore the rich history of Calgary Filipino Methodist Church. Discover how our church has grown and served the Filipino community in Calgary over the years.",
  path: "/about/history",
  keywords: [
    "church history",
    "CFMC history",
    "Filipino Methodist heritage",
    "Calgary church history",
  ],
});

export default function HistoryPage() {
  return (
    <ColumnLayout
      maxW="5xl"
      justifyContent="flex-start"
      textAlign="left"
      minH="auto"
    >
      <SectionHeader
        title={HISTORY_CONTENT[0].title}
        description={HISTORY_CONTENT[0].description}
      />
      <Timeline />
    </ColumnLayout>
  );
}
