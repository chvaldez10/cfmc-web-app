import { FC } from "react";
import { LongParagraph, SectionSubheader, Box } from "@/components/core/ui";
import { HeroHalfWrapper } from "@/components/core/hero";
import { DivProps } from "@/types/layoutProps";

interface EventDescriptionProps extends DivProps {}

const EventDescription: FC<EventDescriptionProps> = ({ children }) => {
  return (
    <Box containerClassName="resize-hero-width mx-auto p-4 lg:py-4 lg:px-0">
      <HeroHalfWrapper containerClassName="space-y-4">
        <SectionSubheader text="Event Description" containerClassName="" />
        <LongParagraph>{children}</LongParagraph>
      </HeroHalfWrapper>
    </Box>
  );
};

export default EventDescription;