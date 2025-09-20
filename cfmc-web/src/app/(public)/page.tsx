// Components
import {
  HomeJumbotron,
  PassedLiveStream,
  VisionMissionParallax,
  LayeredParallax,
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
      <LayeredParallax />
      <SectionHeader
        title={ABOUT_CONTENT.GET_INVOLVED.title}
        description={ABOUT_CONTENT.GET_INVOLVED.description}
        mt="0"
      />
      <EventSwiper />
      <FooterInquiries />
    </>
  );
}
