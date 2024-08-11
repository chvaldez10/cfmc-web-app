import {
  EventHeader,
  EventDescription,
  EventGoogleMaps,
  EventTags,
} from "@/components/core/hero";
import { Box } from "@/components/core/ui";
import { getEventBySlug } from "@/utils/supabase/eventActions";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const eventDetails = await getEventBySlug(slug);

  if (!eventDetails) {
    console.error("Event not found");
  } else {
    console.log("Fetched event details:", eventDetails);
  }

  return (
    <Box containerClassName="py-32 space-y-10">
      <EventHeader
        eventName={eventDetails?.name}
        eventStartDate={eventDetails?.startDate}
        eventAddress={eventDetails?.address}
        eventOrganizerName={eventDetails?.organizerName}
        eventCategory={eventDetails?.category}
        eventImageUrl={eventDetails?.image}
      />
      <EventDescription>{eventDetails?.description}</EventDescription>
      <EventGoogleMaps eventLocation={eventDetails?.googleMapsUrl} />
      <EventTags />
    </Box>
  );
}
