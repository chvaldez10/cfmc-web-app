import {
  HeroHeader,
  AnnouncementList,
  BirthdaySection,
} from "@/components/core/hero";
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
      <AnnouncementList header={"Upcoming Events"} data={announcements} />
      <BirthdaySection />
    </>
  );
}
