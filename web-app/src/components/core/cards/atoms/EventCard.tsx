import React from "react";
import Link from "next/link";
import { NextImage } from "@/components/core/gallery/";
import { EventDataProps } from "@/types/supabaseTypes";
import {
  LongParagraph,
  SectionSubheader,
  SmallText,
  Flex,
} from "@/components/core/ui";

interface EventCardProps extends EventDataProps {}

const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  startDate,
  endDate,
  updatedAt,
  createdAt,
  tags,
  category,
  occurrence,
  description,
  image,
  address,
  status,
  organizerName,
  slug,
}) => {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const month = startDateObj.toLocaleString("en-US", { month: "long" });
  const startDay = startDateObj.getDate();
  const endDay = startDay === endDateObj.getDate() ? "" : endDateObj.getDate();

  return (
    <Flex containerClassName="flex flex-col sm:flex-row items-center w-full max-w-xl hover:bg-gray-100 overflow-hidden">
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
        className="flex flex-col justify-between p-4 leading-normal w-full gap-1 truncate"
      >
        <SmallText>{category}</SmallText>
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
