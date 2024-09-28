import { FC } from "react";
import {
  Box,
  SectionHeader,
  LongParagraph,
  OpenModalButton,
} from "@/components/core/ui";
import { VStack } from "@/components/core/hero";
import { HeroContentProps } from "@/types/layoutProps";

export interface VerticalHeaderProps extends HeroContentProps {}

const VerticalHeader: FC<VerticalHeaderProps> = ({ header, longParagraph }) => {
  return (
    <VStack
      containerClassName={`min-h-[50vh] text-center`}
      layoutClass="flex flex-col"
    >
      <SectionHeader text={header} />
      <LongParagraph containerClassName="long-paragraph-text-color">
        {longParagraph}
      </LongParagraph>
    </VStack>
  );
};

export default VerticalHeader;
