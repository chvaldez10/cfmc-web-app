import { HeroHeader } from "@/components/hero";
import AnnouncementSection from "./_sections/AnnouncementSection";

export default function AnnouncementsPage() {
  return (
    <>
      <HeroHeader
        title="Church"
        titleHighlight="Announcements"
        description="Stay connected with the latest updates, celebrations, and prayer requests from our church family."
      />
      <AnnouncementSection />
    </>
  );
}
