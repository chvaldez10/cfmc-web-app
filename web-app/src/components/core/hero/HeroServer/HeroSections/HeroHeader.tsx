import { FC } from "react";
import { ParticleVStack, HeroTextWrapper } from "@/components/core/hero";
import { MainGradientHeader, SectionSubheader } from "@/components/core/ui";
import { HeroContentProps } from "@/types/layoutProps";

interface HeroHeaderProps extends HeroContentProps {}

const HeroHeader: FC<HeroHeaderProps> = ({ header, longParagraph }) => {
  return (
    <ParticleVStack
      containerClassName={"min-h-screen"}
      itemClassName={"h-[80vh]"}
      dataTestId="hero-header"
    >
      <HeroTextWrapper dataTestId="hero-header-text">
        <MainGradientHeader text={header} containerClassName="text-center" />
        <SectionSubheader
          text={longParagraph}
          containerClassName={"bg-white-10 text-center"}
        />
      </HeroTextWrapper>
    </ParticleVStack>
  );
};

export default HeroHeader;
