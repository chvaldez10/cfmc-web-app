import { FC } from "react";
import { VerticalWrapper, HeroTextWrapper } from "@/components/core/hero";
import { MainGradientHeader, SectionSubheader } from "@/components/core/ui";

interface HeroHeaderProps {
  title: string;
  verbiage: string | undefined;
}

const HeroHeader: FC<HeroHeaderProps> = ({ title, verbiage }) => {
  return (
    <VerticalWrapper itemClassName={"h-[80vh] min-h-screen"}>
      <HeroTextWrapper>
        <MainGradientHeader text={title} />
        <SectionSubheader text={verbiage} containerClassName={"bg-white-10"} />
      </HeroTextWrapper>
    </VerticalWrapper>
  );
};

export default HeroHeader;
