import { FC } from "react";
import { IoPerson } from "react-icons/io5";
import { FlexCenter, Box, Flex } from "@/components/core/ui";
import { NextImage } from "@/components/core/gallery";
import Image from "next/image";

const FullTeamCard: FC = () => {
  return (
    <Box containerClassName="relative">
      <NextImage
        width={"w-full"}
        height={"h-48"}
        src={
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"Full Team Card Image"}
        imageClassName={"rounded-t-lg object-center"}
      />

      <Box containerClassName="w-full max-w-7xl mx-auto px-6 md:px-8">
        <Flex containerClassName="flex-center sm:justify-start relative z-10 -mt-12">
          <Box containerClassName="bg-white-0 rounded-full p-2 border-4 border-solid border-white-0">
            <IoPerson className="w-24 h-24 text-gray-300" />
          </Box>
        </Flex>
        <FlexCenter containerClassName="sm:flex-row max-sm:gap-4 sm:justify-between mb-4">
          <div className="block">
            <h3 className="font-bold text-2xl text-gray-800 mb-1 max-sm:text-center">
              John Doe
            </h3>
            <p className="text-sm text-gray-600 max-sm:text-center">
              Insert role here
              <br className="hidden sm:block" />
              Calgary Filipino Methodist Church
            </p>
          </div>
        </FlexCenter>
        <div className="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4">
          <button className="rounded-full py-3 px-6 bg-gray-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-300 hover:bg-purple-500 hover:text-white-0">
            Media
          </button>
          <button className="rounded-full py-3 px-6 bg-gray-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-300 hover:bg-purple-500 hover:text-white-0">
            Music
          </button>
          <button className="rounded-full py-3 px-6 bg-gray-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-300 hover:bg-purple-500 hover:text-white-0">
            Video
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default FullTeamCard;
