import { FC } from "react";

interface SectionSubheaderProps {
  text: string | undefined;
  className?: string;
}

const SectionSubheader: FC<SectionSubheaderProps> = ({
  text,
  className = "",
}) => {
  return (
    <h2 className={`text-lg md:text-xl lg:text-2xl 2xl:text-4xl ${className}`}>
      {text}
    </h2>
  );
};

export default SectionSubheader;
