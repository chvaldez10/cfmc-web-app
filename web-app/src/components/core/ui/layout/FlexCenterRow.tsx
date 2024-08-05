import { FC } from "react";
import { DivProps } from "@/types/genericTypes";

interface FlexCenterRowProps extends DivProps {}

const FlexCenterRow: FC<FlexCenterRowProps> = ({
  children,
  containerClassName,
}) => {
  return <div className={`div-flex-row ${containerClassName}`}>{children}</div>;
};

export default FlexCenterRow;
