import { ColumnLayout } from "@/components/hero";
import { PageHeader } from "@/components/ui/headers";
import PromoCards from "./_sections/PromoCards";

export default function AboutUsPage() {
  return (
    <ColumnLayout maxW="5xl">
      <PageHeader
        title="About Us"
        subtitle="Discover our mission, values, and the community that makes us who we are"
        size="xl"
      />
      <PromoCards />
    </ColumnLayout>
  );
}
