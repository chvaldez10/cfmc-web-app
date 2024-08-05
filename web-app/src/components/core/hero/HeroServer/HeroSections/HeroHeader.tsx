import { FC } from "react";
import { VerticalWrapper, HeroTextWrapper } from "@/components/core/hero";
import { MainGradientHeader, SectionSubheader } from "@/components/core/ui";

interface HeroHeaderProps {
  title: string;
  verbiage: string;
}

const HeroHeader: FC<HeroHeaderProps> = ({ title, verbiage }) => {
  return (
    <VerticalWrapper itemClassName={"h-[80vh] "}>
      <HeroTextWrapper>
        <MainGradientHeader text={title} />
        <SectionSubheader text={verbiage} className={"bg-white-10"} />
      </HeroTextWrapper>
    </VerticalWrapper>
  );
};

export default HeroHeader;
