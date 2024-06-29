import { FC, ReactNode } from "react";

interface CustomParagraphProps {
  onClick?: () => void | undefined;
  children: ReactNode;
  className?: string;
}

const CustomParagraph: FC<CustomParagraphProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <p
      className={`div-outside-width text-center text-lg md:text-xl lg:text-2xl px-6 bg-white-10 rounded-md  ${className}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default CustomParagraph;
