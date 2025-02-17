import { FC } from "react";
import {
  Flex,
  Box,
  SectionSubheader,
  LongParagraph,
} from "@/components/core/ui";
import { IconProps } from "@/types/uiProps";

interface VerticalTimelineProps {
  items: IconProps[];
}

const VerticalTimeline: FC<VerticalTimelineProps> = ({ items }) => {
  return (
    <Flex containerClassName="container mx-auto px-5 py-24">
      {items.map((item, index) => (
        <Flex
          key={`${item.label}-vertical-timeline`}
          containerClassName="relative flex mx-auto max-w-3xl py-20 sm:items-center md:w-2/3"
          dataTestId={`${item.label}-vertical-timeline`}
        >
          {/* Vertical Line */}
          <Flex containerClassName="absolute inset-0 flex h-full w-6 items-center justify-center">
            <Box containerClassName="h-full w-1 bg-gray-200 pointer-events-none"></Box>
          </Flex>

          {/* Circle with number */}
          <Flex containerClassName="relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 flex-center rounded-full bg-purple-500 text-sm font-medium text-white-0 sm:mt-0">
            {index + 1}
          </Flex>

          {/* Content */}
          <Flex containerClassName="flex-grow flex flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
            <Flex
              containerClassName="inline-flex h-24 w-24 flex-shrink-0 flex-center rounded-full bg-purple-100 text-purple-500"
              key={`${item.label}-vertical-timeline-icon`}
              dataTestId={`${item.label}-vertical-timeline-icon`}
            >
              {item.svgIcon}
            </Flex>
            <Flex
              containerClassName="mt-6 flex-grow sm:mt-0 sm:pl-6"
              dataTestId={`${item.label}-vertical-timeline-description`}
            >
              <SectionSubheader text={item.label} />
              <LongParagraph>{item.description}</LongParagraph>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default VerticalTimeline;
