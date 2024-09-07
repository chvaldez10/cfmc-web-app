import { FC } from "react";
import { TextProps } from "@/types/genericTypes";

interface MainGradientHeaderProps extends TextProps {}

const MainGradientHeader: FC<MainGradientHeaderProps> = ({
  text,
  containerClassName = "",
}) => {
  return (
    <h2
      className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent ${containerClassName}`}
      style={{ userSelect: "text" }}
    >
      {text}
    </h2>
  );
};

export default MainGradientHeader;
