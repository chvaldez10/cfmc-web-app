import { FC } from "react";
import { DivProps } from "@/types/genericTypes";

interface BoxProps extends DivProps {}

// Totally not a copy of from chakra-ui
const Box: FC<BoxProps> = ({ children, containerClassName }) => {
  return <div className={containerClassName}>{children}</div>;
};

export default Box;
