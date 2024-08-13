import { FC } from "react";

interface SectionHeaderProps {
  text: string | undefined;
  containerClassName?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  text,
  containerClassName = "",
}) => {
  return (
    <h2
      className={`text-4xl lg:text-5xl xl:text-6xl font-bold  ${containerClassName}`}
    >
      {text}
    </h2>
  );
};

export default SectionHeader;
