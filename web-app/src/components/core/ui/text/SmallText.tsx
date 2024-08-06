import { FC } from "react";
import { DivProps } from "@/types/genericTypes";

interface SmallTextProps extends DivProps {}

const SmallText: FC<SmallTextProps> = ({ children, containerClassName }) => {
  return (
    <p className={`text-xs md:text-sm text-purple-500 ${containerClassName}`}>
      {children}
    </p>
  );
};

export default SmallText;
