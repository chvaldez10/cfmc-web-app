import { HeroHeader } from "@/components/hero";
import { MediaInquiryForm } from "@/components/forms";
import { ColumnLayout } from "@/components/hero";

export default function MediaInquiryPage() {
  return (
    <>
      <HeroHeader
        title="Media"
        titleHighlight="Inquiry"
        description="Feel free to inquire about our services."
      />
      <ColumnLayout maxW="5xl">
        <MediaInquiryForm />
      </ColumnLayout>
    </>
  );
}
