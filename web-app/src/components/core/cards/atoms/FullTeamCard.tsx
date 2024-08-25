import { FC } from "react";
import { IoPerson } from "react-icons/io5";
import {
  FlexCenter,
  Box,
  Flex,
  SectionSubheader,
  PurpleColoredBadge,
  LongParagraph,
} from "@/components/core/ui";
import { NextImage } from "@/components/core/gallery";

const FullTeamCard: FC = () => {
  return (
    <Box containerClassName="relative">
      <NextImage
        width={"w-full"}
        height={"h-48"}
        src={
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"Full Team Card Image"}
        imageClassName={"rounded-t-lg object-center"}
      />

      <Box containerClassName="w-full max-w-7xl mx-auto px-6 md:px-8">
        <Flex containerClassName="flex-center sm:justify-start relative z-10 -mt-12">
          <Box containerClassName="bg-white-0 rounded-full p-2 border-4 border-solid border-white-0">
            <IoPerson className="w-24 h-24 text-gray-300" />
          </Box>
        </Flex>
        <FlexCenter containerClassName="sm:flex-row max-sm:gap-4 sm:justify-between">
          <Box containerClassName="block">
            <SectionSubheader
              text={"John Doe"}
              containerClassName="text-center max-sm:text-center text-start"
            />
            <p className="text-sm text-gray-600 max-sm:text-center">
              Insert role here
              <br className="hidden sm:block" />
              Calgary Filipino Methodist Church
            </p>
          </Box>
        </FlexCenter>

        <Box containerClassName="w-full h-1 bg-gray-300 rounded my-2"></Box>
        <LongParagraph containerClassName="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </LongParagraph>
        <Flex containerClassName="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4 py-2">
          <PurpleColoredBadge>Media</PurpleColoredBadge>
          <PurpleColoredBadge>Video</PurpleColoredBadge>
          <PurpleColoredBadge>Music</PurpleColoredBadge>
        </Flex>
      </Box>
    </Box>
  );
};

export default FullTeamCard;
