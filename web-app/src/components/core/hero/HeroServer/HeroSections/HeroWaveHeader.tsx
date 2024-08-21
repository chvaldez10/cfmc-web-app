import { FC } from "react";
import { SectionHeader, LongParagraph } from "@/components/core/ui";
import { FlexWrapper, HeroHalfWrapper } from "@/components/core/hero";
import SVGWage from "@/components/core/hero/molecules/atoms/SVGWage";
import { HeroSectionProps } from "@/types/genericTypes";

interface HeroWaveHeaderProps extends HeroSectionProps {}

const HeroHalfHeader: FC<HeroWaveHeaderProps> = ({
  children,
  header,
  longParagraph,
  containerClassName,
}) => {
  return (
    <>
      <FlexWrapper
        layoutClass="div-col-row"
        containerClassName={`min-h-screen ${containerClassName}`}
      >
        <HeroHalfWrapper containerClassName="space-y-4 lg:space-y-8 flex flex-col justify-center">
          <SectionHeader
            text={header}
            containerClassName="text-6xl lg:text-7xl xl:text-8xl font-bold"
          />
          <LongParagraph>{longParagraph}</LongParagraph>
        </HeroHalfWrapper>

        <HeroHalfWrapper containerClassName="div-outside-width">
          {children}
        </HeroHalfWrapper>
      </FlexWrapper>
      <SVGWage />
    </>
  );
};

export default HeroHalfHeader;
