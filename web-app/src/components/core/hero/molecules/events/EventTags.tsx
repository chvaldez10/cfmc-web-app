import { FC } from "react";
import { FilledColoredBadge, Box, Flex } from "@/components/core/ui";
import { HeroHalfWrapper } from "@/components/core/hero";

const EventTags: FC = () => {
  return (
    <Box containerClassName="resize-hero-width mx-auto">
      <HeroHalfWrapper>
        <Flex containerClassName="flex flex-row gap-2 ">
          <FilledColoredBadge color="blue" tagName="Event" />
          <FilledColoredBadge color="blue" tagName="Event" />
        </Flex>
      </HeroHalfWrapper>
    </Box>
  );
};

export default EventTags;
