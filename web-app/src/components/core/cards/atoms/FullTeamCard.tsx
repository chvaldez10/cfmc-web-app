import { FC } from "react";
import {
  Box,
  Flex,
  SectionSubheader,
  LongParagraph,
  SmallText,
} from "@/components/core/ui";
import { IoPerson } from "react-icons/io5";

const FullTeamCard: FC = () => {
  return (
    <Box containerClassName="items-center rounded-lg shadow sm:flex">
      <Flex containerClassName="w-full sm:w-1/3 flex-center p-5">
        <IoPerson className="w-24 h-24 text-gray-300" />
      </Flex>
      <Box containerClassName="p-5 sm:w-2/3 space-y-2">
        <SectionSubheader text={"Test Header"} />
        <LongParagraph>Test Role</LongParagraph>
        <LongParagraph>Test Long Paragraph</LongParagraph>
        <SmallText>Email: test@test.com</SmallText>
      </Box>
    </Box>
  );
};

export default FullTeamCard;
