import { FC } from "react";
import { EventData } from "@/types/eventData";
import { LongParagraph, SectionSubheader } from "../text";

interface EventCardProps {
  event: EventData;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <div className="py-8 px-4 w-full lg:w-1/2 2xl:w-1/3">
      <div className="h-full flex items-start">
        {/* Date */}
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none text-gray-900">
          <span className="pb-2 mb-2 border-b-2 border-gray-300 text">
            {event.month}
          </span>
          <span className="font-medium text-lg leading-none">{event.day}</span>
        </div>
        {/* Event Details */}
        <div className="flex-grow pl-6">
          <p className="text-purple-500 tracking-widest text-xs font-medium mb-1">
            {event.category}
          </p>
          <SectionSubheader text={event.title} className="mb-3 font-medium" />
          <LongParagraph className="text-gray-600">
            {event.description}
          </LongParagraph>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
