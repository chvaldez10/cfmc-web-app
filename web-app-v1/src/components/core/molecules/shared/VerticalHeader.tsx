import { FC } from "react";
import { SectionHeader, LongParagraph, Flex } from "@/components/core/ui";
import { HeroContentProps } from "@/types/layoutProps";

export interface VerticalHeaderProps extends HeroContentProps {}

const VerticalHeader: FC<VerticalHeaderProps> = ({ header, longParagraph }) => {
  return (
    <Flex
      containerClassName={`flex flex-col space-y-4 mx-auto py-8 text-start lg:text-center w-11/12 max-w-3xl`}
    >
      <SectionHeader text={header} />
      <LongParagraph containerClassName="long-paragraph-text-color">
        {longParagraph}
      </LongParagraph>
    </Flex>
  );
};

export default VerticalHeader;
