import { FC } from "react";
import { FilledColoredBadge, Box, Flex } from "@/components/core/ui";
import { HeroHalfWrapper } from "@/components/core/hero";
import { generateRandomInteger } from "@/utils/common/numberUtils";

const colors = [
  "bg-blue-100 text-blue-800 border-blue-400",
  "bg-purple-100 text-purple-800 border-purple-400",
  "bg-green-100 text-green-800 border-green-400",
  "bg-red-100 text-red-800 border-red-400",
  "bg-yellow-100 text-yellow-800 border-yellow-400",
  "bg-pink-100 text-pink-800 border-pink-400",
  "bg-indigo-100 text-indigo-800 border-indigo-400",
  "bg-teal-100 text-teal-800 border-teal-400",
  "bg-orange-100 text-orange-800 border-orange-400",
  "bg-cyan-100 text-cyan-800 border-cyan-400",
  "bg-lime-100 text-lime-800 border-lime-400",
  "bg-emerald-100 text-emerald-800 border-emerald-400",
  "bg-sky-100 text-sky-800 border-sky-400",
  "bg-rose-100 text-rose-800 border-rose-400",
  "bg-white-0 text-gray-800 border-gray-300",
];

interface EventTagsProps {
  tags: string[] | undefined;
}

const EventTags: FC<EventTagsProps> = ({ tags }) => {
  return (
    <Box containerClassName="resize-hero-width mx-auto px-4 pt-8 lg:px-0">
      <HeroHalfWrapper>
        <Flex containerClassName="flex flex-row gap-2 ">
          {tags?.map((tag) => {
            let color =
              colors[generateRandomInteger(Object.keys(colors).length)];
            return <FilledColoredBadge key={tag} color={color} tagName={tag} />;
          })}
        </Flex>
      </HeroHalfWrapper>
    </Box>
  );
};

export default EventTags;
