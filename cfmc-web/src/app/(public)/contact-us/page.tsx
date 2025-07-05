import { ColumnLayout } from "@/components/hero";
import { PageHeader } from "@/components/ui/headers";
import ContactContent from "./_sections/ContactContent";

export default function ContactUsPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our church family - we'd love to hear from you"
        size="xl"
      />
      <ColumnLayout maxW="5xl">
        <ContactContent />
      </ColumnLayout>
    </>
  );
}
