import { FC } from "react";
import VerticalWrapper from "../molecules/VerticalWrapper";
import MainGradientHeader from "@/components/core/text/MainGradientHeader";
import HeroTextWrapper from "../molecules/HeroTextWrapper";
import SectionSubheader from "../../text/SectionSubheader";

interface HeroHeaderProps {
  title: string;
  verbiage: string;
}

const HeroHeader: FC<HeroHeaderProps> = ({ title, verbiage }) => {
  return (
    <VerticalWrapper>
      <HeroTextWrapper>
        <MainGradientHeader text={title} />
        <SectionSubheader text={verbiage} className={"bg-white-10"} />
      </HeroTextWrapper>
    </VerticalWrapper>
  );
};

export default HeroHeader;
