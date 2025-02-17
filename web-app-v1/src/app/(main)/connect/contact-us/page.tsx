import { HeroHeader } from "@/components/core/hero";
import { ContactUs } from "@/components/core/contact";

export default async function page() {
  return (
    <>
      <HeroHeader header="Contact Us" longParagraph="Contact Us" />
      <ContactUs />
    </>
  );
}
