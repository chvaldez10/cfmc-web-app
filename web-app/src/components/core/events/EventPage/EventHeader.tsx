import { FC, ReactElement } from "react";
import { VStack, HeroHalfWrapper } from "@/components/core/hero";
import {
  LongParagraph,
  SectionHeader,
  Box,
  NextImage,
  Flex,
} from "@/components/core/ui";
import { FaCalendarCheck, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdPersonAdd } from "react-icons/md";

const renderEventDetail = (icon: ReactElement, text: string) => (
  <Flex containerClassName="flex-items flex-row gap-2">
    <Box containerClassName="text-violet-500 text-sm lg:text-lg leading-relaxed">
      {icon}
    </Box>
    <LongParagraph>{text}</LongParagraph>
  </Flex>
);

interface EventHeaderProps {
  eventName: string | undefined;
  eventStartDate: Date;
  eventAddress: string;
  eventOrganizerName: string;
  eventCategory: string;
  eventImageUrl: string;
}

const EventHeader: FC<EventHeaderProps> = ({
  eventName,
  eventStartDate,
  eventAddress,
  eventOrganizerName,
  eventCategory,
  eventImageUrl,
}) => {
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
    <VStack
      containerClassName="min-h-auto lg:py-4"
      layoutClass="div-col-row-reverse"
    >
      <HeroHalfWrapper containerClassName="div-outside-width">
        <NextImage
          width={"w-full"}
          height={"h-48 md:h-96 lg:h-576"}
          src={eventImageUrl}
          alt={"Test Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroHalfWrapper>

      <HeroHalfWrapper containerClassName="flex flex-col justify-center">
        <SectionHeader text={eventName} />
        <Box containerClassName="space-y-4 my-8 lg:my-16 font-light">
          {renderEventDetail(<FaCalendarCheck />, longDate)}
          {renderEventDetail(<FaRegClock />, mdtDate)}
          {renderEventDetail(<FaMapMarkerAlt />, eventAddress)}
          {renderEventDetail(<MdPersonAdd />, eventOrganizerName)}
          {renderEventDetail(<BiCategory />, eventCategory)}
        </Box>
      </HeroHalfWrapper>
    </VStack>
  );
};

export default EventHeader;
