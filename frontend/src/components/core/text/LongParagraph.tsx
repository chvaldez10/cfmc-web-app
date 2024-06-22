import { FC, ReactNode } from "react";

interface LongParagraphProps {
  children: ReactNode;
  className?: string;
}

const LongParagraph: FC<LongParagraphProps> = ({
  children,
  className = "",
}) => {
  return (
    <p className={`text-sm lg:text-lg leading-relaxed my-2 ${className}`}>
      {children}
    </p>
  );
};

export default LongParagraph;
