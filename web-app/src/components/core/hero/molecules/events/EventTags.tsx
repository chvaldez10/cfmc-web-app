import { FC } from "react";
import { FilledColoredBadge, Box, Flex } from "@/components/core/ui";
import { HeroHalfWrapper } from "@/components/core/hero";

const colors = {
  blue: "bg-blue-100 text-blue-800 border-blue-400",
  purple: "bg-purple-100 text-purple-800 border-purple-400",
  green: "bg-green-100 text-green-800 border-green-400",
  red: "bg-red-100 text-red-800 border-red-400",
  yellow: "bg-yellow-100 text-yellow-800 border-yellow-400",
};

const EventTags: FC = () => {
  return (
    <Box containerClassName="resize-hero-width mx-auto">
      <HeroHalfWrapper>
        <Flex containerClassName="flex flex-row gap-2 ">
          <FilledColoredBadge color={colors.blue} tagName="Outdoor" />
          <FilledColoredBadge color={colors.purple} tagName="Fellowship" />
        </Flex>
      </HeroHalfWrapper>
    </Box>
  );
};

export default EventTags;
