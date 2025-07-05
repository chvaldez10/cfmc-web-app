import { ColumnLayout } from "@/components/hero";
import { PageHeader } from "@/components/ui/headers";
import PromoCards from "./_sections/PromoCards";

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Discover our mission, values, and the community that makes us who we are"
        size="xl"
      />
      <ColumnLayout maxW="5xl">
        <PromoCards />
      </ColumnLayout>
    </>
  );
}
