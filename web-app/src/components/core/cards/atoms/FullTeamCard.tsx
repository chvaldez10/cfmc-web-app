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
import { ChurchMembers } from "@/types/supabaseTypes";

interface FullTeamCardProps extends ChurchMembers {}

const FullTeamCard: FC<FullTeamCardProps> = ({ ...props }) => {
  return (
    <Box containerClassName="relative bg-white-0">
      <NextImage
        width={"w-full"}
        height={"h-48"}
        src={props.image || ""}
        alt={`${props.firstName} ${props.lastName} Image`}
        imageClassName={"rounded-t-lg object-center"}
      />

      <Box containerClassName="w-full max-w-7xl mx-auto px-6 md:px-8 space-y-4">
        <Flex containerClassName="flex-center sm:justify-start relative z-10 -mt-12">
          <Box containerClassName="bg-white-0 rounded-full p-2 border-4 border-solid border-white-0">
            <IoPerson className="w-24 h-24 text-gray-300" />
          </Box>
        </Flex>
        <Box containerClassName="text-center sm:text-left">
          <SectionSubheader
            text={`${props.firstName} ${props.lastName}`}
            containerClassName=""
          />
          <LongParagraph>{`${props.role} | ${props.headline}`}</LongParagraph>
        </Box>

        <Box containerClassName="w-full h-1 bg-gray-300 rounded my-2"></Box>
        <LongParagraph containerClassName="text-gray-600">
          {props.bio}
        </LongParagraph>
        <Flex containerClassName="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4">
          <PurpleColoredBadge>Media</PurpleColoredBadge>
          <PurpleColoredBadge>Video</PurpleColoredBadge>
          <PurpleColoredBadge>Music</PurpleColoredBadge>
        </Flex>
      </Box>
    </Box>
  );
};

export default FullTeamCard;
