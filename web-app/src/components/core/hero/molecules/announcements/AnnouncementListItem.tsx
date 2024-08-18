import React from "react";
import { LongParagraph, Flex } from "@/components/core/ui";
import { Announcements } from "@/types/supabaseTypes";

interface AnnouncementListItemProps extends Announcements {
  date: Date;
  announcement: string;
  category: string;
  description: string;
  eventId?: number;
  isActive: boolean;
}

const AnnouncementListItem: React.FC<AnnouncementListItemProps> = ({
  date,
  announcement,
  category,
  description,
  eventId,
  isActive,
}) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Flex containerClassName="py-4 div-col-row">
      <Flex containerClassName="hidden-md-flex md:w-64">
        <LongParagraph containerClassName="text-gray-900 ">Date</LongParagraph>
        <LongParagraph containerClassName="text-gray-500 text-sm lg:text-sm my-2">
          {formattedDate}
        </LongParagraph>
      </Flex>
      <Flex containerClassName="md:flex-grow">
        <LongParagraph containerClassName="text-gray-900 font-bold ">
          {announcement}
        </LongParagraph>

        <LongParagraph containerClassName="text-gray-500">
          {description}
        </LongParagraph>
      </Flex>
      <Flex containerClassName="hidden-md-flex-reverse">
        <LongParagraph containerClassName="text-gray-500 text-sm lg:text-sm ">
          {formattedDate}
        </LongParagraph>
      </Flex>
    </Flex>
  );
};

export default AnnouncementListItem;
