"use client";

import { FC, useState } from "react";
import ReleaseItemContainer from "../core/text/ReleaseItemContainer";

const yearsTest = [2024];

const FixedSidebarWithContent: FC = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectYear] = useState<number>(currentYear);

  const handleYearClick = (year: number) => {
    setSelectYear(year);
  };

  return (
    <div className="w-full mx-auto p-5 md:p-0 md:w-7/12 flex flex-col md:flex-row gap-4">
      {/* sidebar */}
      <div className=" z-10 top-5 left-5 bg-white-0 w-32 p-6 my-6 lg:my-8 rounded-lg h-full shadow-md">
        <nav className="flex flex-col space-y-2 ">
          {yearsTest.map((year) => (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`text-lg text-center hover:text-purple-500 ${
                selectedYear === year ? "font-bold" : ""
              }`}
            >
              {year}
            </button>
          ))}
        </nav>
      </div>

      {/* features */}
      <div className="md:ml-10 w-full ">
        <ReleaseItemContainer year={selectedYear} />
      </div>
    </div>
  );
};

export default FixedSidebarWithContent;
