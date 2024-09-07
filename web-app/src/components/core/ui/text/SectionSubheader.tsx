import { FC } from "react";
import { TextProps } from "@/types/genericTypes";

interface SectionSubheaderProps extends TextProps {}

const SectionSubheader: FC<SectionSubheaderProps> = ({
  text,
  containerClassName = "",
}) => {
  return (
    <h2
      className={`text-lg md:text-xl lg:text-2xl 2xl:text-3xl ${containerClassName}`}
      style={{ userSelect: "text" }}
    >
      {text}
    </h2>
  );
};

export default SectionSubheader;
