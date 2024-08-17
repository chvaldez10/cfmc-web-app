import { HeroHeader } from "@/components/core/hero";
import { TeamSection } from "@/components/core/hero";
export default function page() {
  return (
    <>
      <HeroHeader header="Board" longParagraph="Board members" />
      <TeamSection />
    </>
  );
}
