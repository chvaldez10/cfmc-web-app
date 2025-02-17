"use client";

import { FC, useState } from "react";
import { ReleaseItemContainer } from "@/components/core/resources";
import { Flex, Box } from "@/components/core/ui";

const availableYears = [2024];

const ReleaseSidebar: FC = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectYear] = useState<number>(currentYear);

  const handleYearClick = (year: number) => {
    setSelectYear(year);
  };

  return (
    <Flex containerClassName="resize-hero-width mx-auto p-5 md:p-0  flex flex-col md:flex-row gap-4">
      {/* TODO: Improve design for multiple years */}
      <Box containerClassName="z-10 top-4 left-4 bg-white-0 w-32 p-4 rounded-lg h-full shadow-md">
        <nav className="flex flex-col space-y-2">
          {availableYears.map((year) => (
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
      <Box containerClassName="md:ml-8 max-w-3xl space-y-4">
        <ReleaseItemContainer year={selectedYear} />
      </Box>
    </Flex>
  );
};

export default ReleaseSidebar;
