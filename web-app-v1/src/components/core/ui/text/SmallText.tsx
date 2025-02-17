import { FC } from "react";
import { DivProps } from "@/types/layoutProps";

interface SmallTextProps extends DivProps {}

const SmallText: FC<SmallTextProps> = ({ children, containerClassName }) => {
  return (
    <p
      className={`text-xs md:text-sm ${containerClassName}`}
      style={{ userSelect: "text" }}
    >
      {children}
    </p>
  );
};

export default SmallText;
