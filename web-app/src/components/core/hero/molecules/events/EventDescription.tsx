import { FC } from "react";
import { LongParagraph, SectionSubheader, Box } from "@/components/core/ui";
import { DivProps } from "@/types/genericTypes";

interface EventDescriptionProps extends DivProps {}

const EventDescription: FC<EventDescriptionProps> = ({ children }) => {
  return (
    <Box containerClassName="resize-hero-width mx-auto my-10">
      <Box containerClassName=" w-full md:w-1/2">
        <SectionSubheader text="Event Description" className="" />
        <LongParagraph>{children}</LongParagraph>
      </Box>
    </Box>
  );
};

export default EventDescription;
