import { FlexWrapper } from "@/components/core/hero";
import { SectionHeader, SwiperScrollbar } from "@/components/core/ui";
import { getEventsFromRange } from "@/utils/supabase/eventsActions";
import { EmptySetFromSupabase } from "@/components/template";

async function EventBlogSwiper() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const monthNumber = +currentMonth;
  const currentYear = currentDate.getFullYear();

  const eventsInMonth = await getEventsFromRange();

  return (
    <FlexWrapper
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
    </FlexWrapper>
  );
}

export default EventBlogSwiper;
