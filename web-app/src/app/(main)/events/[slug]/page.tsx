// Components
import {
  EventHeader,
  EventDescription,
  EventGoogleMaps,
  EventTags,
  EventNotFound,
  WorshipLyrics,
} from "@/components/core/events";
import { Box } from "@/components/core/ui";

// Actions
import { getEventBySlug } from "@/utils/supabase/actions/eventsActions";
import { getSundaysAndSpecialDaysById } from "@/utils/supabase/actions/sundayAndSpecialDaysActions";

// Types
import { SundaysAndSpecialDays } from "@/types/supabaseTypes";

type PageProps = {
  params: { slug: string };
};

export default async function page({ params }: PageProps) {
  const { slug } = params;
  const eventDetails = await getEventBySlug(slug);

  if (!eventDetails) {
    return <EventNotFound />;
  }

  let sundaysAndSpecialDays: SundaysAndSpecialDays | null = null;

  if (eventDetails.isSundayWorship) {
    sundaysAndSpecialDays = await getSundaysAndSpecialDaysById(eventDetails.id);
  }

  return (
    <>
      {/* Space between header and content */}
      <Box containerClassName="py-12"></Box>

      {/* Event header */}
      <EventHeader
        eventName={eventDetails.name}
        eventStartDate={eventDetails.startDate}
        eventAddress={eventDetails.address}
        eventOrganizerName={eventDetails.organizerName}
        eventCategory={eventDetails.category}
        eventImageUrl={eventDetails.image}
      />

      {/* Event description */}
      <EventDescription>{eventDetails?.description}</EventDescription>

      {/* Event Google Maps */}
      <EventGoogleMaps eventLocation={eventDetails?.googleMapsUrl} />

      {/* Event tags */}
      <EventTags tags={eventDetails.tags} />

      {/* Worship lyrics */}
      {eventDetails.isSundayWorship && (
        <WorshipLyrics
          hymnOfDiscipleship={sundaysAndSpecialDays?.hymnOfDiscipleship}
        />
      )}
    </>
  );
}
