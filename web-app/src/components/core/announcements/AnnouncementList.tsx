import { FlexCenter, Box } from "@/components/core/ui";
import { getAnnouncements } from "@/utils/supabase/announcementsActions";
import AnnouncementListItem from "./AnnouncementListItem";

async function AnnouncementList() {
  const data = await getAnnouncements();

  return (
    <FlexCenter containerClassName="p-4">
      <Box containerClassName="resize-hero-width divide-y divide-purple-300">
        {data?.map((dataEntry, index) => (
          <AnnouncementListItem
            key={index}
            date={dataEntry.date}
            announcement={dataEntry.announcement}
            category={dataEntry.category}
            description={dataEntry.description}
            eventId={dataEntry.eventId}
            isActive={dataEntry.isActive}
          />
        ))}
      </Box>
    </FlexCenter>
  );
}

export default AnnouncementList;
