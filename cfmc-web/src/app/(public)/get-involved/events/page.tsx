import { Metadata } from "next";
import { Container } from "@chakra-ui/react";
import UpcomingEvents from "@/components/features/events/UpcomingEvents";
import { SectionHeader } from "@/components/ui/headers";
import GetInvolvedEvents from "./GetInvolvedEvents";
import { generatePageMetadata } from "@/utils/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Upcoming Events",
  description:
    "View upcoming events at Calgary Filipino Methodist Church. Join us for worship services, community gatherings, special programs, and fellowship activities.",
  path: "/get-involved/events",
  keywords: [
    "church events",
    "upcoming events",
    "church calendar",
    "community events",
    "fellowship activities",
    "church programs",
  ],
});

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
