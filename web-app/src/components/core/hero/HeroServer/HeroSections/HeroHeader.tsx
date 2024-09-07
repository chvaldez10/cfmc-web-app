import { FC } from "react";
import { VerticalWrapper, HeroTextWrapper } from "@/components/core/hero";
import { MainGradientHeader, SectionSubheader } from "@/components/core/ui";
import { HeroContentProps } from "@/types/genericTypes";

interface HeroHeaderProps extends HeroContentProps {}

const HeroHeader: FC<HeroHeaderProps> = ({ header, longParagraph }) => {
  return (
    <VerticalWrapper itemClassName={"h-[80vh] min-h-screen"}>
      <HeroTextWrapper>
        <MainGradientHeader text={header} containerClassName="text-center" />
        <SectionSubheader
          text={longParagraph}
          containerClassName={"bg-white-10"}
        />
      </HeroTextWrapper>
    </VerticalWrapper>
  );
};

export default HeroHeader;
