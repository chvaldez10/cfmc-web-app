import {
  AnnouncementList,
  BirthdaySection,
} from "@/components/core/announcements";
import { PDFHeader } from "@/components/core/molecules";
import { HeroHeader } from "@/components/core/hero";
import { getSundaysAndSpecialDays } from "@/utils/supabase/actions/sundayAndSpecialDaysActions";

export default async function page() {
  const sundaysAndSpecialDays = await getSundaysAndSpecialDays();

  return (
    <>
      <HeroHeader
        header={"Announcements"}
        longParagraph={sundaysAndSpecialDays?.sundayEventName}
      />
      <PDFHeader />
      <AnnouncementList />
      <BirthdaySection />
    </>
  );
}
