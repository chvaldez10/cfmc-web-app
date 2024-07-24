import { FC, ReactNode } from "react";
import ParticlesBackground from "@/components/core/background/ParticlesBackground";

interface HeroWrapperProps {
  children: ReactNode;
}

const HeroWrapper: FC<HeroWrapperProps> = ({ children }) => {
  return (
    <div className="div-outside-width gap-4 min-h-screen">
      {/* Particles Background */}
      <ParticlesBackground />
      <div className="div-outside-width z-10 resize-hero-width h-[80vh] gap-4 ">
        {children}
      </div>
    </div>
  );
};

export default HeroWrapper;
