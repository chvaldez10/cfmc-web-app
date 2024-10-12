import { VStack } from "@/components/core/hero";
import { SectionHeader, EventSwiper } from "@/components/core/ui";
import { getEventsFromRange } from "@/utils/supabase/actions/eventsActions";
import { EmptySetFromSupabase } from "@/components/template";

async function EventBlogSwiper() {
  const eventsInMonth = await getEventsFromRange();

  return (
    <VStack
      containerClassName={"min-h-[60vh] md:min-h-[50vh] bg-green-20"}
      layoutClass={"flex-col space-y-4 lg:space-y-8"}
      dataTestId={"events-swiper"}
    >
      <SectionHeader
        text={"Upcoming Events "}
        containerClassName={"text-center"}
      />
      {eventsInMonth?.length === 0 ? (
        <EmptySetFromSupabase longParagraph={"No events in this month"} />
      ) : (
        <EventSwiper events={eventsInMonth} />
      )}
    </VStack>
  );
}

export default EventBlogSwiper;
