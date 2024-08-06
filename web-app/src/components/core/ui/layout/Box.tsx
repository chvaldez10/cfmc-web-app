import { FC } from "react";
import { DivProps } from "@/types/genericTypes";

interface BoxProps extends DivProps {}

// Note that the Grid component currently has no default styles. Its just to have better visualization of the layout when coding.
const Box: FC<BoxProps> = ({ children, containerClassName }) => {
  return <div className={containerClassName}>{children}</div>;
};

export default Box;
