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
    <div className="text-violet-500 ">{icon}</div>
    {text}
  </LongParagraph>
);

const HeroEvent = () => {
  return (
    <FlexWrapper containerClassName="min-h-auto" layoutClass="div-col-row">
      <HeroHalfWrapper containerClassName="flex flex-col justify-center">
        <SectionHeader text="Outdoor Worship" />

        <Box containerClassName="space-y-4 my-16 font-light ">
          {renderEventDetail(<FaCalendarCheck />, "Sunday August 11th, 2024")}
          {renderEventDetail(<FaRegClock />, "10:00 AM")}
          {renderEventDetail(<FaMapMarkerAlt />, "Glenmore Park")}
          {renderEventDetail(
            <MdPersonAdd />,
            "Calgary Filipino Methodist Church"
          )}
          {renderEventDetail(<BiCategory />, "Outdoor Worship")}
        </Box>
      </HeroHalfWrapper>
      <HeroHalfWrapper containerClassName="div-outside-width">
        <NextImage
          width={"w-full"}
          height={"h-576"}
          src={
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"Test Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroHalfWrapper>
    </FlexWrapper>
  );
};

export default HeroEvent;
