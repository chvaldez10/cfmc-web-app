import { FC } from "react";
import ParticlesBackground from "@/components/core/background/ParticlesBackground";
import MainGradientHeader from "@/components/core/text/MainGradientHeader";
import SectionSubheader from "../text/SectionSubheader";

interface HeroHeaderProps {
  title: string;
  verbiage: string;
}

const HeroHeader: FC<HeroHeaderProps> = ({ title, verbiage }) => {
  return (
    <div className="w-full mx-auto p-5 md:p-0 items-center justify-center md:w-10/12 flex flex-col gap-4 h-screen">
      {/* Particles Background */}
      <ParticlesBackground />

      <div className="flex flex-col items-center justify-center z-10 w-full h-[80vh] gap-4">
        {/* Text Column */}
        <div className="w-full z-10 flex flex-col items-center text-center xl:max-w-4xl ">
          <MainGradientHeader text={title} />
          <SectionSubheader text={verbiage} className={"bg-white-10"} />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
