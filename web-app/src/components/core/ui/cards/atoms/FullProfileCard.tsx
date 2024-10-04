import { FC } from "react";
import { IoPerson } from "react-icons/io5";
import {
  Box,
  Flex,
  SectionSubheader,
  PurpleColoredBadge,
  LongParagraph,
  HorizontalLine,
  NextImage,
} from "@/components/core/ui";
import { ChurchMembers } from "@/types/supabaseTypes";

interface FullProfileCardProps extends ChurchMembers {}

const FullProfileCard: FC<FullProfileCardProps> = ({ ...churchMemberData }) => {
  return (
    <Box containerClassName="relative bg-white-0 p-4">
      <NextImage
        width={"w-full"}
        height={"h-48"}
        src={churchMemberData.image || ""}
        alt={`${churchMemberData.firstName} ${churchMemberData.lastName} Image`}
        imageClassName={"rounded-t-lg object-center"}
      />

      <Box containerClassName="w-full max-w-7xl mx-auto px-6 md:px-8 space-y-4">
        {/* User Profile Picture */}
        <Flex containerClassName="flex-center sm:justify-start relative z-10 -mt-12">
          <Box containerClassName="bg-white-0 rounded-full p-2 border-4 border-solid border-white-0">
            <IoPerson className="w-24 h-24 text-gray-300" />
          </Box>
        </Flex>

        {/* User Details */}
        <Box containerClassName="text-center sm:text-left">
          <SectionSubheader
            text={`${churchMemberData.firstName} ${churchMemberData.lastName}`}
            containerClassName=""
          />
          <LongParagraph>{`${churchMemberData.role} | ${churchMemberData.headline}`}</LongParagraph>
        </Box>
        <HorizontalLine />

        {/* User Bio and important information */}
        <LongParagraph containerClassName="text-gray-600">
          {churchMemberData.bio}
        </LongParagraph>
        <Flex containerClassName="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4">
          {churchMemberData.tags?.map((tag, index) => (
            <PurpleColoredBadge key={index}>{tag}</PurpleColoredBadge>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default FullProfileCard;
