import { ColumnLayout } from "@/components/hero";
import { ParagraphHeader } from "@/components/ui/headers";
import { PromoCards } from "./_sections";

export default function AboutUsPage() {
  return (
    <ColumnLayout maxW="8xl">
      <ParagraphHeader
        title="About Us"
        description="Discover our mission, values, and the community that makes us who we are"
      />
      <PromoCards />
    </ColumnLayout>
  );
}
