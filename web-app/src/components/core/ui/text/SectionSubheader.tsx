import { FC } from "react";

interface SectionSubheaderProps {
  text: string | undefined;
  containerClassName?: string;
}

const SectionSubheader: FC<SectionSubheaderProps> = ({
  text,
  containerClassName = "",
}) => {
  return (
    <h2
      className={`text-lg md:text-xl lg:text-2xl 2xl:text-3xl ${containerClassName}`}
    >
      {text}
    </h2>
  );
};

export default SectionSubheader;
