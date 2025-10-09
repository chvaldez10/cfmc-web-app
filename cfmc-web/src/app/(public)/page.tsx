// Components
import {
  HomeJumbotron,
  PassedLiveStream,
  VisionMissionParallax,
  MinistriesShowcase,
} from "./_sections";
import { FooterInquiries } from "@/components/footer";
import EventSwiper from "@/components/features/events/EventSwiper";
import { SectionHeader } from "@/components/ui/headers";

// Data
import { ABOUT_CONTENT } from "@/constants/shared/about";

export default async function Page() {
  return (
    <>
      <HomeJumbotron />
      <PassedLiveStream />
      <VisionMissionParallax />
      <MinistriesShowcase />
      <SectionHeader
        title={ABOUT_CONTENT.EVENT_SHOWCASE.title}
        description={ABOUT_CONTENT.EVENT_SHOWCASE.description}
        mt="0"
      />
      <EventSwiper />
      <FooterInquiries />
    </>
  );
}
