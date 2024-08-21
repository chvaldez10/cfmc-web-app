import { VerticalTimeline, HeroWaveHeader } from "@/components/core/hero";
import { Box } from "@/components/core/ui";

export default function page() {
  return (
    <>
      <HeroWaveHeader
        header="Media Inquiries"
        longParagraph="The multimedia is involved in a wide range of projects and tasks. Please read below for more information."
        containerClassName="bg-gradient-to-r from-white-10 to-green-10 overflow-hidden"
      />
      <Box containerClassName="py-12"></Box>
      <VerticalTimeline />
    </>
  );
}
