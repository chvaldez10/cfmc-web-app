import React from "react";
import Link from "next/link";
import { NextImage } from "@/components/core/gallery/";
import { EventData } from "@/types/eventData";
import {
  LongParagraph,
  SectionSubheader,
  SmallText,
} from "@/components/core/text";

interface EventCardProps extends EventData {
  imageUrl?: string;
  slug: string;
}

const EventCard: React.FC<EventCardProps> = ({
  month,
  startDay,
  endDay,
  category,
  title,
  description,
  imageUrl,
  slug,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center w-full max-w-xl hover:bg-gray-100 overflow-hidden">
      {imageUrl && (
        <NextImage
          width={"w-full"}
          height={"h-48"}
          src={imageUrl}
          alt={title}
          imageClassName={"rounded-lg object-center"}
        />
      )}

      <Link
        href={`/event/${slug}`}
        className="flex flex-col justify-between p-4 leading-normal w-full truncate gap-1"
      >
        <SmallText> {category}</SmallText>
        <LongParagraph className="overflow-hidden whitespace-nowrap">
          {month} {startDay}
          {endDay && ` - ${endDay}`}
        </LongParagraph>
        <SectionSubheader text={title} />
        <LongParagraph className="text-clip overflow-hidden whitespace-nowrap">
          {description}
        </LongParagraph>
      </Link>
    </div>
  );
};

export default EventCard;
