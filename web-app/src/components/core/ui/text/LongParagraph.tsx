import { FC } from "react";
import { DivProps } from "@/types/genericTypes";

interface LongParagraphProps extends DivProps {}

const LongParagraph: FC<LongParagraphProps> = ({
  children,
  containerClassName = "",
}) => {
  return (
    <p
      className={`text-sm lg:text-lg leading-relaxed ${containerClassName} `}
      style={{ userSelect: "text" }}
    >
      {children}
    </p>
  );
};

export default LongParagraph;
