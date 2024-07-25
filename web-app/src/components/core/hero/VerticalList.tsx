import { FC } from "react";
import Link from "next/link";
import { liturgyTableData } from "@/types/genericTypes";
import SectionHeader from "../text/SectionHeader";

interface VerticalListProps {
  header: string;
  data: liturgyTableData[];
}

const VerticalList: FC<VerticalListProps> = ({ header, data }) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-8 md:py-16 lg:py-24 lg:px-6">
      {/* Time slots */}
      <div className="divide-y divide-purple-300">
        {data.map((dataEntry, index) => (
          <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 mb-6 md:mb-0 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-purple-500">
                Date
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2024</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-purple-500 title-font mb-2">
                Header
              </h2>
              <p className="leading-relaxed">Long Paragraph</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalList;
