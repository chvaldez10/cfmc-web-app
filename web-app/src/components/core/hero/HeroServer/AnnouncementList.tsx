import { FC } from "react";
import { liturgyTableData } from "@/types/genericTypes";
import { SectionSubheader, LongParagraph } from "@/components/core/ui";
import { announcements } from "@/data/testData/verticalListTest";
import { FlexCenter, Box } from "@/components/core/ui";

const AnnouncementList: FC = () => {
  const data = announcements;

  return (
    <FlexCenter containerClassName="p-4">
      <Box containerClassName="resize-hero-width divide-y divide-purple-300">
        {data.map((dataEntry, index) => (
          <div key={index} className="py-4 div-col-row">
            <div className="hidden-md-flex md:w-64">
              <LongParagraph containerClassName="text-gray-900 ">
                Date
              </LongParagraph>
              <LongParagraph containerClassName="text-gray-500 text-sm lg:text-sm my-2">
                {dataEntry.date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </LongParagraph>
            </div>
            <div className="md:flex-grow">
              <LongParagraph containerClassName="text-gray-900 font-bold ">
                {dataEntry.title}
              </LongParagraph>

              <LongParagraph containerClassName="text-gray-500">
                {dataEntry.content}
              </LongParagraph>
            </div>
            <div className="hidden-md-flex-reverse">
              <LongParagraph containerClassName="text-gray-500 text-sm lg:text-sm ">
                {dataEntry.date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </LongParagraph>
            </div>
          </div>
        ))}
      </Box>
    </FlexCenter>
  );
};

export default AnnouncementList;
