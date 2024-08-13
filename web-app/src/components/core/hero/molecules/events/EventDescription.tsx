import { FC } from "react";
import { LongParagraph, SectionSubheader, Box } from "@/components/core/ui";
import { HeroHalfWrapper } from "@/components/core/hero";
import { DivProps } from "@/types/genericTypes";

interface EventDescriptionProps extends DivProps {}

const EventDescription: FC<EventDescriptionProps> = ({ children }) => {
  return (
    <Box containerClassName="resize-hero-width mx-auto">
      <HeroHalfWrapper>
        <SectionSubheader text="Event Description" containerClassName="" />
        <LongParagraph>{children}</LongParagraph>
      </HeroHalfWrapper>
    </Box>
  );
};

export default EventDescription;
