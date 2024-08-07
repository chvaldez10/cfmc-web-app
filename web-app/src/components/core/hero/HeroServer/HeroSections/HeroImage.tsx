import { FC } from "react";

import {
  SectionHeader,
  SectionSubheader,
  LongParagraph,
} from "@/components/core/ui/";
import { SwiperCoverFlow } from "@/components/core/gallery";
import { nextImage } from "@/types/genericTypes";
import { HeroSectionProps } from "@/types/genericTypes";
import { FlexWrapper, HeroHalfWrapper } from "@/components/core/hero";

interface HeroImageClientProps extends HeroSectionProps {
  swiperImages: nextImage[];
}

const HeroImageClient: FC<HeroImageClientProps> = ({
  header,
  subheader,
  longParagraph,
  swiperImages,
  reverse = false,
  containerClassName = "",
}) => {
  const layoutClass = reverse ? "div-col-row-reverse" : "div-col-row";

  return (
    <FlexWrapper
      containerClassName={containerClassName}
      layoutClass={layoutClass}
    >
      {/* Text Column */}
      <HeroHalfWrapper containerClassName="div-outside-width text-center gap-4">
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
