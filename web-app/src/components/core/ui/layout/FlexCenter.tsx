import { FC, ReactNode } from "react";
import { DivProps } from "@/types/genericTypes";

interface FlexCenterProps extends DivProps {}

export const FlexCenter: FC<FlexCenterProps> = ({
  children,
  containerClassName,
}) => {
  return (
    <div className={`div-outside-width ${containerClassName}`}>{children}</div>
  );
};
