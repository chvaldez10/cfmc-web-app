import { FC } from "react";
import { Box } from "@/components/core/ui";
import { IframeMap, HeroHalfWrapper } from "@/components/core/hero";

interface EventDescriptionProps {
  eventLocation: string | undefined;
}

const EventGoogleMaps: FC<EventDescriptionProps> = ({ eventLocation }) => {
  return (
    <Box containerClassName="resize-hero-width mx-auto p-4 lg:py-4 lg:px-0">
      <HeroHalfWrapper containerClassName="h-56 md:h-96">
        <IframeMap src={eventLocation} />
      </HeroHalfWrapper>
    </Box>
  );
};

export default EventGoogleMaps;
