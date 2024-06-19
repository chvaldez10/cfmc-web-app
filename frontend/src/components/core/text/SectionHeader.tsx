import { FC } from "react";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ text }) => {
  return (
    <h2 className="text-3xl lg:text-6xl font-bold my-4 text-gray-800 text-center">
      {text}
    </h2>
  );
};

export default SectionHeader;
