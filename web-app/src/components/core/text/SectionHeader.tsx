import { FC } from "react";

interface SectionHeaderProps {
  text: string | undefined;
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ text, className = "" }) => {
  return (
    <h2
      className={`text-4xl lg:text-5xl xl:text-6xl font-bold my-4  ${className}`}
    >
      {text}
    </h2>
  );
};

export default SectionHeader;
