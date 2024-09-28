import { FC } from "react";
import { Box, SectionHeader, LongParagraph, Flex } from "@/components/core/ui";
import { HeroContentProps } from "@/types/layoutProps";

export interface VerticalHeaderProps extends HeroContentProps {}

// TODO: Style this component
const VerticalHeader: FC<VerticalHeaderProps> = ({ header, longParagraph }) => {
  return (
    <Flex
      containerClassName={`resize-hero-width gap-4 flex flex-col text-center mx-auto py-8 max-w-3xl`}
    >
      <SectionHeader text={header} />
      <LongParagraph containerClassName="long-paragraph-text-color">
        {longParagraph}
      </LongParagraph>
    </Flex>
  );
};

export default VerticalHeader;
