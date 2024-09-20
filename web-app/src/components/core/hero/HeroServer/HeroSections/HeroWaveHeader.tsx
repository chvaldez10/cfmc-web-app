import { FC } from "react";
import { SectionHeader, LongParagraph } from "@/components/core/ui";
import { VStack, HeroHalfWrapper } from "@/components/core/hero";
import { SVGWage } from "@/components/core/molecules";
import { HeroSectionProps } from "@/types/layoutProps";

interface HeroWaveHeaderProps extends HeroSectionProps {}

const HeroHalfHeader: FC<HeroWaveHeaderProps> = ({
  children,
  header,
  longParagraph,
  containerClassName,
}) => {
  return (
    <>
      <VStack
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
      </VStack>
      <SVGWage />
    </>
  );
};

export default HeroHalfHeader;
