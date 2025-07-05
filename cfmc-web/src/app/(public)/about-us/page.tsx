import { ColumnLayout } from "@/components/hero";
import { PageHeader } from "@/components/ui/headers";
import WelcomeParagraph from "./_sections/WelcomeParagraph";
import AboutContent from "./_sections/AboutContent";

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Discover our mission, values, and the community that makes us who we are"
        size="xl"
      />
      <ColumnLayout maxW="4xl">
        <AboutContent />
      </ColumnLayout>
    </>
  );
}
