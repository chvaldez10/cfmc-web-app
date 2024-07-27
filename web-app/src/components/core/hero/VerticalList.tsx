import { FC } from "react";
import { liturgyTableData } from "@/types/genericTypes";
import { SectionSubheader, LongParagraph } from "../text";

interface VerticalListProps {
  header: string;
  data: liturgyTableData[];
}

const VerticalList: FC<VerticalListProps> = ({ header, data }) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-8 md:py-16 lg:px-6">
      <div className="divide-y divide-purple-300">
        {data.map((dataEntry, index) => (
          <div key={index} className="py-4 div-col-row">
            <div className="hidden-md-flex md:w-64">
              <LongParagraph className="text-gray-900 ">Date</LongParagraph>
              <LongParagraph className="text-gray-500 text-sm lg:text-sm my-2">
                {dataEntry.date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </LongParagraph>
            </div>
            <div className="md:flex-grow">
              <LongParagraph className="text-gray-900 font-bold ">
                {dataEntry.title}
              </LongParagraph>

              <LongParagraph className="text-gray-500">
                {dataEntry.content}
              </LongParagraph>
            </div>
            <div className="hidden-md-flex-reverse">
              <LongParagraph className="text-gray-500 text-sm lg:text-sm my-2">
                {dataEntry.date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </LongParagraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalList;
