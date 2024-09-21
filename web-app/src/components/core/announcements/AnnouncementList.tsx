import { FlexCenter, Box } from "@/components/core/ui";
import { getAnnouncements } from "@/utils/supabase/actions/announcementsActions";
import AnnouncementListItem from "./AnnouncementListItem";

async function AnnouncementList() {
  const announcements = await getAnnouncements();

  return (
    <FlexCenter containerClassName="p-4">
      <Box containerClassName="resize-hero-width divide-y divide-purple-300">
        {announcements?.map((announcementData, index) => (
          <AnnouncementListItem key={index} {...announcementData} />
        ))}
      </Box>
    </FlexCenter>
  );
}

export default AnnouncementList;
