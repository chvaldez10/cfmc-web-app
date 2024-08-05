import { FC } from "react";

interface SectionHeaderProps {
  text: string | undefined;
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ text, className = "" }) => {
  return (
    <h2 className={`text-4xl lg:text-5xl xl:text-6xl font-bold  ${className}`}>
      {text}
    </h2>
  );
};

export default SectionHeader;
