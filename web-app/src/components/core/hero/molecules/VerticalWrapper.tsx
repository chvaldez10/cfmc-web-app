import { FC, ReactNode } from "react";
import ParticlesBackground from "@/components/core/background/ParticlesBackground";

interface VerticalWrapperProps {
  children: ReactNode;
  containerClassName?: string;
  itemClassName?: string | undefined;
}

const VerticalWrapper: FC<VerticalWrapperProps> = ({
  children,
  containerClassName,
  itemClassName,
}) => {
  return (
    <div
      className={`div-outside-width gap-4 min-h-screen ${containerClassName}`}
    >
      {/* Particles Background */}
      <ParticlesBackground />
      <div
        className={`div-outside-width z-10 resize-hero-width gap-4 ${itemClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default VerticalWrapper;
