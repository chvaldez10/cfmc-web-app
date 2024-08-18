import {
  HeroHeader,
  AnnouncementList,
  BirthdaySection,
} from "@/components/core/hero";
import { getSundaysAndSpecialDays } from "@/utils/supabase/sundayAndSpecialDaysAction";

export default async function page() {
  const sundaysAndSpecialDays = await getSundaysAndSpecialDays();

  return (
    <>
      <HeroHeader
        header={"Announcements"}
        longParagraph={sundaysAndSpecialDays?.sundayEventName}
      />
      <AnnouncementList />
      <BirthdaySection />
    </>
  );
}
