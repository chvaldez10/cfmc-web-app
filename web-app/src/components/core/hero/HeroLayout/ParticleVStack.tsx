import { FC } from "react";
import { FlexCenter } from "@/components/core/ui";
import { DivProps } from "@/types/layoutProps";
import ParticlesBackground from "@/components/core/background/ParticlesBackground";

interface ParticleVStackProps extends DivProps {
  itemClassName?: string | undefined;
}

// Layout component that wraps children using the div-outside-width class and adds a particles background
const ParticleVStack: FC<ParticleVStackProps> = ({
  children,
  containerClassName,
  itemClassName,
  dataTestId,
}) => {
  return (
    <FlexCenter
      containerClassName={`gap-4 ${containerClassName}`}
      dataTestId={dataTestId}
    >
      <ParticlesBackground />
      <FlexCenter
        containerClassName={`z-10 resize-hero-width gap-4 ${itemClassName}`}
      >
        {children}
      </FlexCenter>
    </FlexCenter>
  );
};

export default ParticleVStack;
