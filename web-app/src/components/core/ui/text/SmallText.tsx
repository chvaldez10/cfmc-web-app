import { FC } from "react";
import { DivProps } from "@/types/genericTypes";

interface SmallTextProps extends DivProps {}

const SmallText: FC<SmallTextProps> = ({ children, containerClassName }) => {
  return (
    <p className={`text-xs md:text-sm ${containerClassName}`}>{children}</p>
  );
};

export default SmallText;
