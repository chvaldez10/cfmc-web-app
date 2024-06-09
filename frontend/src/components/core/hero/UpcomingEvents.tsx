import { FC } from "react";
import { upcomingEvents } from "@/data/events/upcomingEventsData";
import Link from "next/link";

const UpcomingEvents: FC = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-8 md:py-16 lg:py-24 lg:px-6">
      {/* Header */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-4xl font-extrabold">Upcoming Events</h2>
      </div>

      {/* Time slots */}
      <div className="divide-y divide-purple-600">
        {upcomingEvents.map((upcomingEvent, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-rows-1 md:grid-cols-3 py-4 "
          >
            {/* Date */}
            <p className="text-lg font-bold col-span-1 mb-2 md:mb-0 text-center">
              {upcomingEvent.time}
            </p>

            {/* Event Header */}
            <p className="flex flex-col md:flex-row text-base md:text-lg truncate col-span-2 text-center md:text-left">
              <Link
                href={upcomingEvent.link}
                className="hover:text-purple-500 block truncate"
              >
                {upcomingEvent.title}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
