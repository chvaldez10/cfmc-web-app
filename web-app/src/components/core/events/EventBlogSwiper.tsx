import { VStack } from "@/components/core/hero";
import { SectionHeader, SwiperScrollbar } from "@/components/core/ui";
import { getEventsFromRange } from "@/utils/supabase/actions/eventsActions";
import { EmptySetFromSupabase } from "@/components/template";

async function EventBlogSwiper() {
  const eventsInMonth = await getEventsFromRange();

  return (
    <VStack
      containerClassName={"min-h-[50vh] bg-green-20"}
      layoutClass={"flex-col space-y-4 lg:space-y-8"}
    >
      <SectionHeader
        text={"Upcoming Events "}
        containerClassName={"text-center"}
      />
      {eventsInMonth?.length === 0 ? (
        <EmptySetFromSupabase longParagraph={"No events in this month"} />
      ) : (
        <SwiperScrollbar events={eventsInMonth} />
      )}
    </VStack>
  );
}

export default EventBlogSwiper;
