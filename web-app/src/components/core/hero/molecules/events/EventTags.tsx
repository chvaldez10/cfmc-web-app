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
];

interface EventTagsProps {
  tags: string[] | undefined;
}

const EventTags: FC<EventTagsProps> = ({ tags }) => {
  return (
    <Box containerClassName="resize-hero-width mx-auto">
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
