import { FC } from "react";
import EventCard from "../cards/EventCard";
import { EventData } from "@/types/eventData";
import SectionHeader from "../text/SectionHeader";

interface EventBlogProps {
  events: EventData[];
}

const EventBlog: FC<EventBlogProps> = ({ events }) => {
  return (
    <div className="bg-violet-10 h-full div-outside-width pt-7">
      {/* Header */}
      <SectionHeader text={"All Upcoming Events"} className={"text-center"} />

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

export default EventBlog;
