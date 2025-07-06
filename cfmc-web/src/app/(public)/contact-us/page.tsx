import { ColumnLayout } from "@/components/hero";
import { ParagraphHeader } from "@/components/ui/headers";
import ContactContent from "./_sections/ContactContent";

export default function ContactUsPage() {
  return (
    <>
      <ColumnLayout maxW="5xl">
        <ParagraphHeader
          title="Contact Us"
          description="We'd love to hear from you! Whether you're new to Calgary, exploring faith, looking for a church family, or simply have a question—we're here to help."
        />
        <ContactContent />
      </ColumnLayout>
    </>
  );
}
