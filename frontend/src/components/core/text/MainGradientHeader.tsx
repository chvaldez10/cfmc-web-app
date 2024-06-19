import { FC } from "react";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ text }) => {
  return (
    <h2 className="text-5xl mb-4 md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent">
      {text}
    </h2>
  );
};

export default SectionHeader;
