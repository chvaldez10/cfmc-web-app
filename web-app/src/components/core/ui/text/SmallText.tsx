import { FC } from "react";
import { textProps } from "@/types/genericTypes";

interface SmallTextProps extends textProps {}

const SmallText: FC<SmallTextProps> = ({ children, className }) => {
  return (
    <p className={`text-xs md:text-sm text-purple-500 ${className}`}>
      {children}
    </p>
  );
};

export default SmallText;
