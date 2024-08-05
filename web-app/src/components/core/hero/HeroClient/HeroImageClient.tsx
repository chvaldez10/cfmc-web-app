"use client";

import { FC } from "react";

import {
  SectionHeader,
  SectionSubheader,
  LongParagraph,
} from "@/components/core/ui/";
import { SwiperCoverFlow } from "@/components/core/gallery";
import { nextImage } from "@/types/genericTypes";
import useNextSunday from "@/hooks/useNextSunday";
import { heroSection } from "@/types/genericTypes";
import { FlexWrapper, HeroHalfWrapper } from "@/components/core/hero";

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
  const nextSunday = useNextSunday(); // client component because of this hook
  const subheader =
    userSubHeader || (nextSunday ? liturgicalCalendar[nextSunday] : "");

  const layoutClass = reverse ? "div-col-row-reverse" : "div-col-row";

  return (
    <FlexWrapper
      containerClassName={containerClassName}
      layoutClass={layoutClass}
    >
      {/* Text Column */}
      <HeroHalfWrapper className="div-outside-width text-center gap-4">
        <SectionSubheader text={subheader} className="text-purple-500" />
        <SectionHeader text={header} />
        <LongParagraph>{longParagraph}</LongParagraph>
      </HeroHalfWrapper>

      {/* Image Column */}
      <HeroHalfWrapper>
        <SwiperCoverFlow swiperImages={swiperImages} />
      </HeroHalfWrapper>
    </FlexWrapper>
  );
};

export default HeroImageClient;
