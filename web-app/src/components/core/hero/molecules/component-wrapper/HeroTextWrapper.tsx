import { FC, ReactNode } from "react";
import { FlexCenter } from "@/components/core/ui";
import { DivProps } from "@/types/genericTypes";

interface HeroTextWrapperProps extends DivProps {}

const HeroTextWrapper: FC<HeroTextWrapperProps> = ({
  children,
  containerClassName,
}) => {
  return (
    <FlexCenter
      containerClassName={`z-10 xl:max-w-4xl gap-4 ${containerClassName}`}
    >
      {children}
    </FlexCenter>
  );
};

export default HeroTextWrapper;
