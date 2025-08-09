// Components
import {
  HomeJumbotron,
  PassedLiveStream,
  DiscoverMinistries,
  VisionMissionParallax,
  LayeredParallax,
} from "./_sections";
import { FooterInquiries } from "@/components/footer";
import EventSwiper from "@/components/features/events/EventSwiper";
import { SectionHeader } from "@/components/ui/headers";

// Data
import { mockEvents } from "@/data/mock/mockEvents";

export default async function Page() {
  return (
    <>
      <HomeJumbotron />
      <PassedLiveStream />
      <VisionMissionParallax />
      <LayeredParallax />
      <SectionHeader
        title="Our Community"
        description="The community of Calgary Filipino Methodist Church is a warm, Christ-centered family of believers rooted in Filipino faith and culture. United in love and service, we gather to worship, grow in God's Word, and support one another through life's journeys. Our fellowship is marked by hospitality, prayer, and joyful worship, as we seek to reflect Christ's light in our homes, church, and the wider Calgary community. Together, we are building a legacy of faith for future generations."
        mt="0"
      />
      <DiscoverMinistries />
      <EventSwiper events={mockEvents} />
      <FooterInquiries />
    </>
  );
}
