import { Metadata } from "next";

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

// SEO
import { generatePageMetadata } from "@/utils/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Home",
  description:
    "Welcome to Calgary Filipino Methodist Church - A vibrant Christian community in Calgary, Alberta. Join us for worship services, ministries, and fellowship events.",
  path: "/",
  keywords: [
    "worship services Calgary",
    "Sunday service",
    "Filipino community",
    "church events",
    "Christian fellowship",
  ],
});

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
