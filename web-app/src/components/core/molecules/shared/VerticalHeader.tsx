import { FC } from "react";
import {
  Box,
  SectionHeader,
  LongParagraph,
  OpenModalButton,
} from "@/components/core/ui";
import { VerticalContainerWrapper } from "@/components/core/hero";
import { HeroContentProps } from "@/types/layoutProps";

export interface VerticalHeaderProps extends HeroContentProps {}

const VerticalHeader: FC<VerticalHeaderProps> = ({ header, longParagraph }) => {
  return (
    <VerticalContainerWrapper>
      <SectionHeader text={header} />
      <LongParagraph containerClassName="long-paragraph-text-color">
        {longParagraph}
      </LongParagraph>
    </VerticalContainerWrapper>
  );
};

export default VerticalHeader;
