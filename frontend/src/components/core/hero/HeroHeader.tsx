import { FC } from "react";
import ParticlesBackground from "@/components/core/background/ParticlesBackground";

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
          <h2 className="text-5xl mb-4 md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl px-6 bg-purple-50 text-gray-700 rounded-md hover-animation shadow-up">
            {verbiage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
