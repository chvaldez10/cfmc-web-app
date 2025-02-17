import { FC, ReactNode } from "react";
import { FlexCenter } from "@/components/core/ui";
import { DivProps } from "@/types/layoutProps";

interface HeroTextWrapperProps extends DivProps {}

const HeroTextWrapper: FC<HeroTextWrapperProps> = ({
  children,
  containerClassName,
  dataTestId,
}) => {
  return (
    <FlexCenter
      containerClassName={`z-10 p-4 xl:max-w-4xl gap-4 ${containerClassName}`}
      dataTestId={dataTestId}
    >
      {children}
    </FlexCenter>
  );
};

export default HeroTextWrapper;
