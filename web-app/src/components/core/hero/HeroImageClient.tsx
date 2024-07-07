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
  containerClassName,
}) => {
  const nextSunday = useNextSunday();
  const subheader =
    userSubHeader || (nextSunday ? liturgicalCalendar[nextSunday] : "");

  const imageOrderClass = reverse ? "order-1 md:order-2" : "order-2 md:order-1";
  const textOrderClass = reverse ? "order-2 md:order-1" : "order-1 md:order-2";

  return (
    <div className={`div-outside-width min-h-screen p-4 ${containerClassName}`}>
      <div className="div-col-row resize-hero-width gap-4">
        {/* Image Column */}
        <div className={`resize-width-to-half ${imageOrderClass}`}>
          <CoverFlowSwiper swiperImages={swiperImages} />
        </div>

        {/* Text Column */}
        <div
          className={`resize-width-to-half div-outside-width text-center gap-4 ${textOrderClass}`}
        >
          <SectionSubheader text={subheader} className="text-purple-500" />
          <SectionHeader text={header} />
          <LongParagraph>{longParagraph}</LongParagraph>
        </div>
      </div>
    </div>
  );
};

export default HeroImageClient;
