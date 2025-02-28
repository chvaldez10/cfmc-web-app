// Components
import HomeJumbotron from "./_components/HomeJumbotron";
import EventSwiper from "@/components/events/EventSwiper";

// Data
import { mockEvents } from "@/data/mock/mockEvents";

export default function Page() {
  return (
    <>
      <HomeJumbotron />
      <EventSwiper events={mockEvents} />
    </>
  );
}
