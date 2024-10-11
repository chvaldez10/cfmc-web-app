import { FC } from "react";
import { LongParagraph, SectionSubheader, Box } from "@/components/core/ui";
import { HeroHalfWrapper } from "@/components/core/hero";
import { DivProps } from "@/types/layoutProps";
import { EVENT_CONTENT_SPACE } from "@/data/constants/shared";

interface EventDescriptionProps extends DivProps {}

const EventDescription: FC<EventDescriptionProps> = ({ children }) => {
  return (
    <Box containerClassName={EVENT_CONTENT_SPACE}>
      <HeroHalfWrapper containerClassName="space-y-4">
        <SectionSubheader
          text="Event Description"
          containerClassName="font-bold"
        />
        <LongParagraph>{children}</LongParagraph>
      </HeroHalfWrapper>
    </Box>
  );
};

export default EventDescription;
