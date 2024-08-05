import React from "react";
import Link from "next/link";
import { NextImage } from "@/components/core/gallery/";
import { EventDataProps } from "@/types/supabaseTypes";
import {
  LongParagraph,
  SectionSubheader,
  SmallText,
} from "@/components/core/ui";

interface EventCardProps extends EventDataProps {}

const EventCard: React.FC<EventCardProps> = ({
  name,
  startDate,
  endDate,
  category,
  description,
  image,
  location,
  status,
  organizerName,
  slug,
}) => {
  const month = startDate.toLocaleString("en-US", { month: "long" });
  const startDay = startDate.getDate();
  const endDay = startDay === endDate.getDate() ? "" : endDate.getDate();

  return (
    <div className="flex flex-col sm:flex-row items-center w-full max-w-xl hover:bg-gray-100 overflow-hidden">
      {image && (
        <NextImage
          width={"w-full"}
          height={"h-48"}
          src={image}
          alt={name}
          imageClassName={"rounded-lg object-center"}
        />
      )}

      <Link
        href={`/event/${slug}`}
        className="flex flex-col justify-between p-4 leading-normal w-full truncate gap-1"
      >
        <SmallText> {category}</SmallText>
        <LongParagraph containerClassName="overflow-hidden whitespace-nowrap">
          {month} {startDay}
          {endDay && ` - ${endDay}`}
        </LongParagraph>
        <SectionSubheader text={name} />
        <LongParagraph containerClassName="text-clip overflow-hidden whitespace-nowrap">
          {description}
        </LongParagraph>
      </Link>
    </div>
  );
};

export default EventCard;
