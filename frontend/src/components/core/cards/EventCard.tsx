import { FC } from "react";
import { EventData } from "@/types/eventData";
import SectionSubheader from "../text/SectionSubheader";

interface EventCardProps {
  event: EventData;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <div className="py-8 px-4 lg:w-1/3">
      <div className="h-full flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="pb-2 mb-2 border-b-2 border-gray-300">
            {event.month}
          </span>
          <span className="font-medium text-lg leading-none">{event.day}</span>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-red-500 tracking-widest text-xs font-medium mb-1">
            {event.category}
          </h2>
          <SectionSubheader text={event.title} className="mb-3 font-medium" />
          <p className="leading-relaxed mb-5">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
