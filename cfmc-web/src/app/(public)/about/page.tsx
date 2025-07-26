"use client";

import { ColumnLayout } from "@/components/hero";
import { SectionHeader } from "@/components/ui/headers";
import { PromoCards } from "@/components/ui/cards";

export default function AboutUsPage() {
  return (
    <ColumnLayout maxW="7xl">
      <SectionHeader
        title="About Us"
        description="Discover our mission, values, and the community that makes us who we are"
      />
      <PromoCards />
    </ColumnLayout>
  );
}
