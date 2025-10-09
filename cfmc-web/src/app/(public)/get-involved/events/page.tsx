import { HeroHeader } from "@/components/hero";
import { Container } from "@chakra-ui/react";
import { getUpcomingEvents } from "@/lib/supabase/actions/events";
import UpcomingEvents from "@/components/features/events/UpcomingEvents";

export default async function UpcomingEventsPage() {
  const events = await getUpcomingEvents();

  return (
    <>
      <HeroHeader
        title="Events"
        description="Join us for our events and activities."
      />

      <Container maxW="7xl" py={{ base: 8, md: 12 }}>
        <UpcomingEvents events={events} />
      </Container>
    </>
  );
}
