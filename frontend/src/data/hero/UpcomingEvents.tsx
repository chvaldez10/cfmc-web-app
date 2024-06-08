import { FC } from "react";
import { upcomingEvents } from "@/data/events/upcomingEventsData";

const UpcomingEvents: FC = () => {
  return (
    <div className="mx-auto w-full md:w-10/12 px-4 py-8 lg:px-6 sm:py-16 lg:py-24">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold">Upcoming Events</h2>
      </div>

      {/* Time slots */}
      <div className="mt-8 md:mt-16">
        <div className="divide-y divide-gray-700">
          {upcomingEvents.map((upcomingEvent, index) => (
            <div key={index} className="flex items-center py-4">
              <p className="w-32 text-lg text-gray-400 sm:text-right shrink-0">
                {upcomingEvent.time}
              </p>
              <h3 className="ml-4 text-lg font-semibold">
                <a href={upcomingEvent.link} className="hover:underline">
                  {upcomingEvent.title}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
