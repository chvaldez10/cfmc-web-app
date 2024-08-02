"use client";

import { FC } from "react";

import {
  SectionHeader,
  SectionSubheader,
  LongParagraph,
} from "@/components/core/text/";
import CoverFlowSwiper from "../gallery/CoverFlowSwiper";
import { nextImage } from "@/types/genericTypes";
import useNextSunday from "@/hooks/useNextSunday";
import { heroSection } from "@/types/genericTypes";
import FlexWrapper from "./molecules/FlexWrapper";

// temporary data, this component should be server once theres a working db
import { liturgicalCalendar } from "@/data/hero";

interface HeroImageClientProps extends heroSection {
  swiperImages: nextImage[];
}

const HeroImageClient: FC<HeroImageClientProps> = ({
  header,
  userSubHeader,
  longParagraph,
  swiperImages,
  reverse = false,
  containerClassName = "",
}) => {
  const nextSunday = useNextSunday();
  const subheader =
    userSubHeader || (nextSunday ? liturgicalCalendar[nextSunday] : "");

  const layoutClass = reverse ? "div-col-row-reverse" : "div-col-row";

  return (
    <FlexWrapper
      containerClassName={containerClassName}
      layoutClass={layoutClass}
    >
      {/* Image Column */}
      <div className="resize-width-to-half">
        <CoverFlowSwiper swiperImages={swiperImages} />
      </div>

      {/* Text Column */}
      <div className="resize-width-to-half div-outside-width text-center gap-4">
        <SectionSubheader text={subheader} className="text-purple-500" />
        <SectionHeader text={header} />
        <LongParagraph>{longParagraph}</LongParagraph>
      </div>
    </FlexWrapper>
  );
};

export default HeroImageClient;
