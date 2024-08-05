import React from "react";
import { FlexWrapper, HeroHalfWrapper } from "@/components/core/hero";
import { EventDataProps } from "@/types/supabaseTypes";
import { NextImage } from "@/components/core/gallery";
import { LongParagraph, SectionHeader, Box } from "@/components/core/ui";
import { FaCalendarCheck, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";

const HeroEvent = () => {
  return (
    <FlexWrapper containerClassName="min-h-auto" layoutClass="div-col-row">
      <HeroHalfWrapper className="flex flex-col justify-center">
        <SectionHeader text="Outdoor Worship" />

        {/* country region island */}
        <Box containerClassName="space-y-4 my-16 font-light ">
          <LongParagraph containerClassName="flex flex-row gap-2 items-center">
            <div className="text-violet-500">
              <FaCalendarCheck />
            </div>
            Sunday August 11th, 2024
          </LongParagraph>

          <LongParagraph containerClassName="flex flex-row gap-2 items-center">
            <div className="text-violet-500">
              <FaRegClock />
            </div>
            10:00 AM
          </LongParagraph>

          <LongParagraph containerClassName="flex flex-row gap-2 items-center">
            <div className="text-violet-500">
              <FaMapMarkerAlt />
            </div>
            Glenmore Park
          </LongParagraph>
        </Box>
      </HeroHalfWrapper>
      <HeroHalfWrapper className="div-outside-width">
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
