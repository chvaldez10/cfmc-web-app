import { FC } from "react";
import EventCard from "../cards/EventCard";
import { EventData } from "@/types/eventData";
import SectionHeader from "../text/SectionHeader";

interface EventContainerProps {
  events: EventData[];
}

const EventContainer: FC<EventContainerProps> = ({ events }) => {
  return (
    <div className="bg-violet-10 min-h-screen flex flex-col justify-center">
      {/* Header */}
      <SectionHeader text={"Upcoming Events"} />

      {/* Events */}
      <div className="container px-5 py-8 md:py-14 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventContainer;
