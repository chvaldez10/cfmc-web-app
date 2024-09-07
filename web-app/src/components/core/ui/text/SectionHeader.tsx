import { FC } from "react";
import { TextProps } from "@/types/genericTypes";

interface SectionHeaderProps extends TextProps {}

const SectionHeader: FC<SectionHeaderProps> = ({
  text,
  containerClassName = "",
}) => {
  return (
    <h2
      className={`text-4xl lg:text-5xl xl:text-6xl font-bold  ${containerClassName}`}
      style={{ userSelect: "text" }}
    >
      {text}
    </h2>
  );
};

export default SectionHeader;
