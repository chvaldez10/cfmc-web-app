import { FC } from "react";
import EventCard from "@/components/core/cards/EventCard";
import { EventData } from "@/types/eventData";
import SectionHeader from "@/components/core/text/SectionHeader";
import ContainerWrapper from "@/components/core/hero/molecules/ContainerWrapper";

interface EventBlogProps {
  events: EventData[];
}

const EventBlog: FC<EventBlogProps> = ({ events }) => {
  return (
    <div className="min-h-full div-outside-width py-16 gap-5 bg-violet-10">
      {/* Header */}
      <SectionHeader text={"All Upcoming Events"} className={"text-center"} />

      {/* Events */}
      <ContainerWrapper>
        <div className="flex flex-wrap -mx-4 ">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default EventBlog;
