"use client";

import { FC, ReactNode } from "react";
import { SectionSubheader, LongParagraph } from "../../text";

interface SimpleCardItemProps {
  title: string;
  description: string;
  svgIcon: ReactNode;
  handleClick: () => void;
}

const SimpleCardItem: FC<SimpleCardItemProps> = ({
  title,
  description,
  svgIcon,
  handleClick,
}) => {
  return (
    <div
      key={title}
      className="div-outside-width py-4 hover-animation hover-up h-[50vh] md:h-[30vh]"
      onClick={handleClick}
    >
      <div className="text-6xl mb-4">{svgIcon}</div>
      <SectionSubheader text={title.toUpperCase()} />
      <LongParagraph>{description}</LongParagraph>
    </div>
  );
};

export default SimpleCardItem;
