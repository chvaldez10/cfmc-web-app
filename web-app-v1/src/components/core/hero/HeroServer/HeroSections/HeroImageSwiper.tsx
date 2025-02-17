import { FC } from "react";

import {
  SectionHeader,
  SectionSubheader,
  LongParagraph,
  ImageSwiperClient,
} from "@/components/core/ui/";
import { ImageProps } from "@/types/genericTypes";
import { HeroSectionProps } from "@/types/layoutProps";
import { VStack, HeroHalfWrapper } from "@/components/core/hero";

interface HeroImageSwiperProps extends HeroSectionProps {
  swiperImages: ImageProps[];
}

const HeroImageSwiper: FC<HeroImageSwiperProps> = ({
  header,
  subheader,
  longParagraph,
  swiperImages,
  reverse = false,
  containerClassName = "",
  dataTestId,
}) => {
  const layoutClass = reverse ? "div-col-row-reverse" : "div-col-row";

  return (
    <VStack
      containerClassName={containerClassName}
      layoutClass={layoutClass}
      dataTestId={dataTestId}
    >
      {/* Text Column */}
      <HeroHalfWrapper containerClassName="div-outside-width text-center gap-4">
        <LongParagraph containerClassName="text-purple-500 ">
          {subheader}
        </LongParagraph>
        <SectionHeader text={header} />
        <SectionSubheader
          text={longParagraph}
          containerClassName="long-paragraph-text-color"
        />
      </HeroHalfWrapper>

      {/* Image Column */}
      <HeroHalfWrapper>
        <ImageSwiperClient swiperImages={swiperImages} slidesPerView={1} />
      </HeroHalfWrapper>
    </VStack>
  );
};

export default HeroImageSwiper;
