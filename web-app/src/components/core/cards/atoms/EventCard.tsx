import React from "react";
import Link from "next/link";
import { EventData } from "@/types/eventData";

interface EventCardProps extends EventData {
  imageUrl?: string;
  slug: string;
}

const EventCard: React.FC<EventCardProps> = ({
  month,
  day,
  category,
  title,
  description,
  imageUrl,
  slug,
}) => {
  return (
    <Link
      href={`/event/${slug}`}
      className="flex flex-col sm:flex-row items-center w-full max-w-xl hover:bg-gray-100 overflow-hidden"
    >
      {imageUrl && (
        <img
          className="object-cover w-full sm:w-48 h-48 sm:h-full"
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <div className="mb-2 text-xl font-bold">
          {month} {day}
        </div>
        <div className="mb-2 text-sm text-gray-600">{category}</div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default EventCard;
