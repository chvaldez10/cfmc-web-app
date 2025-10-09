import { HeroHeader } from "@/components/hero";
import { Container } from "@chakra-ui/react";
import UpcomingEvents from "@/components/features/events/UpcomingEvents";
import { SectionHeader } from "@/components/ui/headers";

export default function UpcomingEventsPage() {
  return (
    <>
      <HeroHeader
        title="Events"
        description="Join us for our events and activities."
      />

      <Container maxW="7xl" pt={{ base: 8, md: 12 }}>
        <SectionHeader
          title="Upcoming Events"
          description="Join us for our upcoming events and activities."
        />
        <UpcomingEvents />
      </Container>
    </>
  );
}
