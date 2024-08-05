import { FC } from "react";
import { DivProps } from "@/types/genericTypes";

interface FlexCenterProps extends DivProps {}

// Totally not a copy of Flex from Chakra UI
const FlexCenter: FC<FlexCenterProps> = ({ children, containerClassName }) => {
  return (
    <div className={`div-outside-width ${containerClassName}`}>{children}</div>
  );
};

export default FlexCenter;
