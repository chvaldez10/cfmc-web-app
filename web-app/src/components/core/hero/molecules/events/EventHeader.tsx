import { FC, ReactElement } from "react";
import { FlexWrapper, HeroHalfWrapper } from "@/components/core/hero";
import { EventDataProps } from "@/types/supabaseTypes";
import { NextImage } from "@/components/core/gallery";
import { LongParagraph, SectionHeader, Box } from "@/components/core/ui";
import { FaCalendarCheck, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdPersonAdd } from "react-icons/md";

const renderEventDetail = (icon: ReactElement, text: string) => (
  <LongParagraph containerClassName="flex flex-row gap-2 items-center">
    <Box containerClassName="text-violet-500 ">{icon}</Box>
    {text}
  </LongParagraph>
);

interface EventHeaderProps {
  eventName: string | undefined;
  eventStartDate: Date;
  eventAddress: string;
  eventOrganizerName: string;
  eventCategory: string;
  eventImageUrl: string;
}

const EventHeader = ({
  eventName,
  eventStartDate,
  eventAddress,
  eventOrganizerName,
  eventCategory,
  eventImageUrl,
}: EventHeaderProps) => {
  const mdtDate = eventStartDate.toLocaleString("en-US", {
    timeZone: "America/Denver",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const longDate = eventStartDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <FlexWrapper
      containerClassName="min-h-auto"
      layoutClass="div-col-row-reverse"
    >
      <HeroHalfWrapper containerClassName="div-outside-width">
        <NextImage
          width={"w-full"}
          height={"h-576"}
          src={eventImageUrl}
          alt={"Test Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroHalfWrapper>
      <HeroHalfWrapper containerClassName="flex flex-col justify-center">
        <SectionHeader text={eventName} />

        <Box containerClassName="space-y-4 my-16 font-light  ">
          {renderEventDetail(<FaCalendarCheck />, longDate)}
          {renderEventDetail(<FaRegClock />, mdtDate)}
          {renderEventDetail(<FaMapMarkerAlt />, eventAddress)}
          {renderEventDetail(<MdPersonAdd />, eventOrganizerName)}
          {renderEventDetail(<BiCategory />, eventCategory)}
        </Box>
      </HeroHalfWrapper>
    </FlexWrapper>
  );
};

export default EventHeader;
