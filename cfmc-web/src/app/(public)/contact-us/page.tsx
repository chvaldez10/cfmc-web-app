import { ColumnLayout } from "@/components/hero";
import { ParagraphHeader } from "@/components/ui/headers";
import { CONTACT_US_CONTENT } from "@/constants/about";
import ContactForm from "./_sections/ContactForm";

export default function ContactUsPage() {
  return (
    <>
      <ColumnLayout maxW="5xl">
        <ParagraphHeader
          title={CONTACT_US_CONTENT[0].title}
          description={CONTACT_US_CONTENT[0].description}
        />
        <ContactForm />
      </ColumnLayout>
    </>
  );
}
