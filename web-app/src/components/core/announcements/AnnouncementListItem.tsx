import React from "react";
import { LongParagraph, Flex } from "@/components/core/ui";
import { Announcements } from "@/types/supabase/worship";

interface AnnouncementListItemProps extends Announcements {}

const AnnouncementListItem: React.FC<AnnouncementListItemProps> = ({
  ...announcementData
}) => {
  const formattedDate = announcementData.date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Flex containerClassName="py-4 div-col-row">
      <Flex containerClassName="resize-width-to-1-3">
        <LongParagraph containerClassName="hidden lg:block text-gray-900 ">
          Date
        </LongParagraph>
        <LongParagraph containerClassName="text-gray-500 text-sm lg:text-sm my-1 lg:my-2">
          {formattedDate}
        </LongParagraph>
      </Flex>
      <Flex containerClassName="resize-width-to-2-3">
        <LongParagraph containerClassName="text-gray-900 font-bold ">
          {announcementData.announcement}
        </LongParagraph>

        <LongParagraph containerClassName="text-gray-500">
          {announcementData.description}
        </LongParagraph>
      </Flex>
    </Flex>
  );
};

export default AnnouncementListItem;
