import { HeroHeader, VerticalList, WordWall } from "@/components/core/hero";
import { announcements } from "@/data/testData/verticalListTest";
import { getSundaysAndSpecialDays } from "@/utils/supabase/sundayAndSpecialDaysAction";

export default async function page() {
  const sundaysAndSpecialDays = await getSundaysAndSpecialDays();

  return (
    <>
      <HeroHeader
        header={"Announcements"}
        longParagraph={sundaysAndSpecialDays?.sundayEventName}
      />
      <VerticalList header={"Upcoming Events"} data={announcements} />
      <WordWall />
    </>
  );
}
