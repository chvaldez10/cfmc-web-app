import { FC } from "react";
import { Box } from "@/components/core/ui";
import { IframeMap } from "@/components/core/hero";

interface EventDescriptionProps {
  eventLocation: string;
}

const EventGoogleMaps: FC<EventDescriptionProps> = ({ eventLocation }) => {
  return (
    <Box containerClassName="resize-hero-width mx-auto my-10">
      <Box containerClassName=" w-full md:w-1/2 h-96">
        <IframeMap src={eventLocation} />
      </Box>
    </Box>
  );
};

export default EventGoogleMaps;
