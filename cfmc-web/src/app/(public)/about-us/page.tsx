import { ColumnLayout } from "@/components/hero";
import { ParagraphHeader } from "@/components/ui/headers";
import AboutContent from "./_sections/AboutContent";

export default function AboutUsPage() {
  return (
    <>
      <ParagraphHeader
        title="About Us"
        description="Discover our mission, values, and the community that makes us who we are"
      />
      <ColumnLayout maxW="5xl">
        <AboutContent />
      </ColumnLayout>
    </>
  );
}
