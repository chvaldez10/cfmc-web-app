import {
  EventHeader,
  EventDescription,
  EventGoogleMaps,
  EventTags,
  EventNotFound,
  WorshipLyrics,
} from "@/components/core/events";
import { Box } from "@/components/core/ui";
import { getEventBySlug } from "@/utils/supabase/actions/eventsActions";
import { getSundaysAndSpecialDaysById } from "@/utils/supabase/actions/sundayAndSpecialDaysActions";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const eventDetails = await getEventBySlug(slug);

  if (!eventDetails) {
    return <EventNotFound />;
  }

  if (eventDetails.isSundayWorship) {
    const sundaysAndSpecialDays = await getSundaysAndSpecialDaysById(
      eventDetails.id
    );
  }

  return (
    <>
      <Box containerClassName="py-12"></Box>
      <EventHeader
        eventName={eventDetails.name}
        eventStartDate={eventDetails.startDate}
        eventAddress={eventDetails.address}
        eventOrganizerName={eventDetails.organizerName}
        eventCategory={eventDetails.category}
        eventImageUrl={eventDetails.image}
      />
      <EventDescription>{eventDetails?.description}</EventDescription>
      <EventGoogleMaps eventLocation={eventDetails?.googleMapsUrl} />
      <EventTags tags={eventDetails.tags} />

      {eventDetails.isSundayWorship && <WorshipLyrics />}
    </>
  );
}
