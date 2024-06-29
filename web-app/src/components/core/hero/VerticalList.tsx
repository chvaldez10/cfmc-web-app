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
    <div className="bg-slate-50">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 md:py-16 lg:py-24 lg:px-6">
        {/* Header */}
        <SectionHeader text={"Upcoming Events"} />

        {/* Time slots */}
        <div className="divide-y divide-purple-300">
          {data.map((dataEntry, index) => (
            <div key={index} className="flex flex-col md:flex-row py-4 md:py-6">
              {/* Date */}
              <div className="md:w-1/3 text-center md:text-left mb-2 md:mb-0">
                <p className="text-lg font-bold ">{dataEntry.title}</p>
              </div>

              {/* Event Header */}
              <div className="md:w-2/3 text-center md:text-left">
                <Link
                  href={dataEntry.link}
                  className="text-base md:text-lg  hover:text-purple-500 block truncate"
                >
                  {dataEntry.content}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalList;
