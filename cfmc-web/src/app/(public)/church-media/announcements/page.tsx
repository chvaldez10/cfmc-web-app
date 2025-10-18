import { Metadata } from "next";
import { HeroHeader } from "@/components/hero";
import AnnouncementSection from "./_sections/AnnouncementSection";
import { generatePageMetadata } from "@/utils/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Church Announcements",
  description:
    "Stay updated with the latest announcements, celebrations, and prayer requests from Calgary Filipino Methodist Church. Connect with our church family.",
  path: "/church-media/announcements",
  keywords: [
    "church announcements",
    "church news",
    "prayer requests",
    "church updates",
    "celebrations",
  ],
});

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
