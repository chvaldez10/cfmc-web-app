import { FC, ReactNode } from "react";
import { FlexCenter } from "@/components/core/ui";
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
    <FlexCenter containerClassName={`gap-4 min-h-screen ${containerClassName}`}>
      <ParticlesBackground />
      <FlexCenter
        containerClassName={`z-10 resize-hero-width gap-4 ${itemClassName}`}
      >
        {children}
      </FlexCenter>
    </FlexCenter>
  );
};

export default VerticalWrapper;
