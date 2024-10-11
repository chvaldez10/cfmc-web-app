import {
  AnnouncementList,
  BirthdaySection,
} from "@/components/core/announcements";
import { PDFHeader } from "@/components/core/molecules";
import { HeroHeader } from "@/components/core/hero";
import { getSundaysAndSpecialDays } from "@/utils/supabase/actions/sundayAndSpecialDaysActions";

const announcementsVerbiage = `Browse through our announcements to see what's happening at CFMC.`;

export default async function page() {
  const sundaysAndSpecialDays = await getSundaysAndSpecialDays();
  const announcementSrc = sundaysAndSpecialDays?.announcements;

  return (
    <>
      {/* Hero Header */}
      <HeroHeader
        header={"Announcements"}
        longParagraph={sundaysAndSpecialDays?.sundayEventName}
      />

      {/* PDF Header */}
      <PDFHeader
        header={"Announcements"}
        longParagraph={announcementsVerbiage}
        src={announcementSrc}
        buttonText={"Announcements"}
      />

      {/* Announcement List */}
      <AnnouncementList />

      {/* Birthday Section */}
      <BirthdaySection />
    </>
  );
}
