import React from "react";
import {
  Box,
  Flex,
  SectionSubheader,
  LongParagraph,
  SmallText,
} from "@/components/core/ui";
import { IoPerson } from "react-icons/io5";
interface TeamCardProps {
  boardMemberName: string;
  boardPosition: string;
  caption: string;
  email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  boardMemberName,
  boardPosition,
  caption,
  email,
}) => {
  return (
    <Box containerClassName="items-center bg-white rounded-lg shadow sm:flex">
      <Flex containerClassName="w-full sm:w-1/3 flex-center p-5">
        <IoPerson className="w-24 h-24 text-gray-300" />
      </Flex>
      <Box containerClassName="p-5 sm:w-2/3 space-y-2">
        <SectionSubheader text={boardMemberName} />
        <LongParagraph>{boardPosition}</LongParagraph>
        <LongParagraph>{caption}</LongParagraph>
        <SmallText>Email: {email}</SmallText>
      </Box>
    </Box>
  );
};

export default TeamCard;
