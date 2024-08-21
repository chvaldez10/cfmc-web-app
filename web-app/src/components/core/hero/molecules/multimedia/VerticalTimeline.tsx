import { FC } from "react";
import { mediaInquiries } from "@/data/hero/";
import {
  Flex,
  Box,
  SectionSubheader,
  SectionHeader,
  LongParagraph,
} from "@/components/core/ui";

const VerticalTimeline: FC = () => {
  return (
    <Flex containerClassName="container px-5 py-24 mx-auto flex flex-wrap">
      {mediaInquiries.map((item, index) => (
        <Flex
          key={index}
          containerClassName="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto "
        >
          <Flex containerClassName="h-full w-6 absolute inset-0 flex-center">
            <Box containerClassName="h-full w-1 bg-gray-200 pointer-events-none"></Box>
          </Flex>
          <Flex containerClassName="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm text-white-0">
            {index + 1}
          </Flex>
          <Flex containerClassName="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <Flex containerClassName="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
              {item.svgIcon}
            </Flex>
            <Flex containerClassName="flex-grow sm:pl-6 mt-6 sm:mt-0">
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
