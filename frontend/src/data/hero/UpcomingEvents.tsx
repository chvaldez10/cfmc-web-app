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
      <div className="divide-y divide-gray-700">
        {upcomingEvents.map((upcomingEvent, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-rows-1 md:grid-cols-3 py-4"
          >
            <p className="text-lg text-gray-700 font-bold col-span-1 mb-2 md:mb-0">
              {upcomingEvent.time}
            </p>
            <p className="text-lg truncate col-span-2">
              <Link
                href={upcomingEvent.link}
                className="hover:underline block truncate"
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
