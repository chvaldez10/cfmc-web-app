"use client";

import { FC, useState } from "react";
import { ReleaseItemContainer } from "@/components/core/resources";
import { Flex, Box } from "@/components/core/ui";

const yearsTest = [2024];

const FixedSidebarWithContent: FC = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectYear] = useState<number>(currentYear);

  const handleYearClick = (year: number) => {
    setSelectYear(year);
  };

  return (
    <Flex containerClassName="w-full mx-auto p-5 md:p-0 md:w-7/12 flex flex-col md:flex-row gap-4">
      {/* TODO: Refactor design for multiple years */}
      <Box containerClassName="z-10 top-4 left-4 bg-white-0 w-32 p-6 rounded-lg h-full shadow-md">
        <nav className="flex flex-col space-y-2">
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
      </Box>

      {/* features */}
      <Box containerClassName="md:ml-10 w-full space-y-4">
        <ReleaseItemContainer year={selectedYear} />
      </Box>
    </Flex>
  );
};

export default FixedSidebarWithContent;
