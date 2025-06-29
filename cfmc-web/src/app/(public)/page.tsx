// Components
import { HomeJumbotron, PassedLiveStream } from "./_sections";
import EventSwiper from "@/components/features/events/EventSwiper";

// Data
import { mockEvents } from "@/data/mock/mockEvents";

export default function Page() {
  return (
    <>
      <HomeJumbotron />
      <PassedLiveStream />
      <EventSwiper events={mockEvents} />
    </>
  );
}
