import { FC } from "react";
import HeroWrapper from "./molecules/HeroWrapper";
import MainGradientHeader from "@/components/core/text/MainGradientHeader";
import HeroTextWrapper from "./molecules/atoms/HeroTextWrapper";
import SectionSubheader from "../text/SectionSubheader";

interface HeroHeaderProps {
  title: string;
  verbiage: string;
}

const HeroHeader: FC<HeroHeaderProps> = ({ title, verbiage }) => {
  return (
    <HeroWrapper>
      <HeroTextWrapper>
        <MainGradientHeader text={title} />
        <SectionSubheader text={verbiage} className={"bg-white-10"} />
      </HeroTextWrapper>
    </HeroWrapper>
  );
};

export default HeroHeader;
