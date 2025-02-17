import React from "react";
import Link from "next/link";
import { Events } from "@/types/supabase/worship";
import {
  LongParagraph,
  SectionSubheader,
  SmallText,
  Flex,
  NextImage,
} from "@/components/core/ui";

interface EventCardProps extends Events {}

const EventCard: React.FC<EventCardProps> = ({
  name,
  startDate,
  endDate,
  category,
  description,
  image,
  slug,
}) => {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const month = startDateObj.toLocaleString("en-US", { month: "long" });
  const startDay = startDateObj.getDate();
  const endDay = startDay === endDateObj.getDate() ? "" : endDateObj.getDate();

  return (
    <Flex containerClassName="flex-center flex-col sm:flex-row hover:bg-gray-100">
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
        href={`/events/${slug}`}
        className="flex flex-col justify-between p-4 leading-normal w-full gap-2 truncate "
      >
        <SmallText containerClassName="text-purple-500">{category}</SmallText>
        <SectionSubheader
          text={`${month} ${startDay}${endDay ? ` - ${endDay}` : ""}`}
        />

        <LongParagraph containerClassName="truncate">
          {description}
        </LongParagraph>
      </Link>
    </Flex>
  );
};

export default EventCard;
