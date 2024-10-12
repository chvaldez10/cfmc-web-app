import { FC } from "react";
import {
  Flex,
  NextImage,
  Box,
  LongParagraph,
  SectionSubheader,
} from "@/components/core/ui";
import { FaStepBackward, FaStepForward, FaPause } from "react-icons/fa";
import { WorshipSongs } from "@/types/supabase/worship";
import { formatTime } from "@/utils/common/dateUtils";

interface MusicCardProps extends WorshipSongs {
  progress: number;
}

const MusicCard: FC<MusicCardProps> = ({
  image,
  songTitle,
  artist,
  progress,
}) => {
  return (
    <Flex containerClassName="bg-white-0 p-6 rounded-2xl shadow-md w-full h-full flex flex-col justify-between">
      {/* Album Cover */}
      <Box containerClassName="mb-4">
        <NextImage
          width={"w-full"}
          height={"h-40"}
          src={image}
          alt={songTitle}
          imageClassName="rounded-lg object-cover"
        />
      </Box>

      {/* Song Info */}
      <Box containerClassName="text-center mb-4">
        <SectionSubheader text={songTitle} containerClassName="font-bold" />
        <LongParagraph>{artist}</LongParagraph>
      </Box>

      {/* Music Controls */}
      <Flex containerClassName="flex-center mb-4">
        {/* Previous */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition">
          <FaStepBackward className="w-4 h-4 text-gray-600" />
        </button>

        {/* Play/Pause */}
        <button className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 focus:outline-none mx-4 transition">
          <FaPause className="w-5 h-5 text-white-0" />
        </button>

        {/* Next */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition">
          <FaStepForward className="w-4 h-4 text-gray-600" />
        </button>
      </Flex>

      {/* Progress Bar */}
      <Box containerClassName="mb-2">
        <Box containerClassName="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-purple-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </Box>
        <Flex containerClassName="flex justify-between mt-1 text-xs text-gray-600">
          <span>{formatTime((progress / 100) * 180)}</span>
          <span>3:00</span>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MusicCard;
