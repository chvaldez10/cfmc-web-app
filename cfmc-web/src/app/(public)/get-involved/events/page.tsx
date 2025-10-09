import { HeroHeader } from "@/components/hero";
import { Container } from "@chakra-ui/react";
import UpcomingEvents from "@/components/features/events/UpcomingEvents";
import { SectionHeader } from "@/components/ui/headers";
import GetInvolvedEvents from "./GetInvolvedEvents";

export default function UpcomingEventsPage() {
  return (
    <>
      <GetInvolvedEvents />

      <Container maxW="7xl" pt={{ base: 8, md: 12 }}>
        <SectionHeader
          title="Upcoming"
          description="Join us for our upcoming events and activities."
        />
        <UpcomingEvents />
      </Container>
    </>
  );
}
