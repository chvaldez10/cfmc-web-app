import { FlexWrapper } from "@/components/core/hero";
import { SwiperScrollbar } from "@/components/core/gallery/";
import { SectionHeader } from "@/components/core/ui";
import { getEventsByMonth } from "@/utils/supabase/eventActions";

async function EventBlogSwiper() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const monthNumber = +currentMonth;
  const currentYear = currentDate.getFullYear();

  const eventsInMonth = await getEventsByMonth(monthNumber, currentYear);

  return (
    <FlexWrapper
      containerClassName={"min-h-[50vh] "}
      layoutClass={"flex-col space-y-4 lg:space-y-8"}
    >
      <SectionHeader
        text={"Upcoming Events "}
        containerClassName={"text-center"}
      />
      <SwiperScrollbar events={eventsInMonth} />
    </FlexWrapper>
  );
}

export default EventBlogSwiper;
