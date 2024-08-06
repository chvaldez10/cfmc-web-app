import { FC } from "react";
import { Box } from "@/components/core/ui";
import { IframeMap, HeroHalfWrapper } from "@/components/core/hero";

interface EventDescriptionProps {
  eventLocation: string;
}

const EventGoogleMaps: FC<EventDescriptionProps> = ({ eventLocation }) => {
  return (
    <Box containerClassName="resize-hero-width mx-auto">
      <HeroHalfWrapper containerClassName=" h-96">
        <IframeMap src={eventLocation} />
      </HeroHalfWrapper>
    </Box>
  );
};

export default EventGoogleMaps;
