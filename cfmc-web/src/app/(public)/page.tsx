// Components
import { HomeJumbotron, PassedLiveStream, MissionVision } from "./_sections";
import { FooterInquiries } from "@/components/footer";
import EventSwiper from "@/components/features/events/EventSwiper";

// Data
import { mockEvents } from "@/data/mock/mockEvents";

export default function Page() {
  return (
    <>
      <HomeJumbotron />
      <PassedLiveStream />
      <MissionVision />
      <EventSwiper events={mockEvents} />
      <FooterInquiries />
    </>
  );
}
