import {
  HeroHeader,
  AnnouncementList,
  BirthdaySection,
} from "@/components/core/hero";
import { getSundaysAndSpecialDays } from "@/utils/supabase/sundayAndSpecialDaysActions";
import PDFViewer from "@/components/core/hero/molecules/announcements/PDFViewer";

export default async function page() {
  const sundaysAndSpecialDays = await getSundaysAndSpecialDays();

  return (
    <>
      <HeroHeader
        header={"Announcements"}
        longParagraph={sundaysAndSpecialDays?.sundayEventName}
      />
      <AnnouncementList />
      <PDFViewer pdfFile={"liturgy.pdf"} />
      <BirthdaySection />
    </>
  );
}
