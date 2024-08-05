import { FC, ReactNode } from "react";
import { DivProps } from "@/types/genericTypes";

interface LongParagraphProps extends DivProps {}

const LongParagraph: FC<LongParagraphProps> = ({
  children,
  containerClassName = "",
}) => {
  return (
    <p className={`text-sm lg:text-lg leading-relaxed ${containerClassName} `}>
      {children}
    </p>
  );
};

export default LongParagraph;
