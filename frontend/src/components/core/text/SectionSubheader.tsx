import { FC } from "react";

interface SectionSubheaderProps {
  text: string;
  className?: string;
}

const SectionSubheader: FC<SectionSubheaderProps> = ({
  text,
  className = "",
}) => {
  return (
    <h2
      className={`text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-700 ${className}`}
    >
      {text}
    </h2>
  );
};

export default SectionSubheader;
