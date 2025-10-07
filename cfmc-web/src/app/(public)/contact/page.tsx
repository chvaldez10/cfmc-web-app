import { ColumnLayout } from "@/components/hero";
import { SectionHeader } from "@/components/ui/headers";
import { CONTACT_US_CONTENT } from "@/constants/shared/contact";
import { ContactForm } from "@/components/forms";

export default function ContactUsPage() {
  return (
    <ColumnLayout maxW="5xl">
      <SectionHeader
        title={CONTACT_US_CONTENT[0].title}
        description={CONTACT_US_CONTENT[0].description}
      />
      <ContactForm />
    </ColumnLayout>
  );
}
