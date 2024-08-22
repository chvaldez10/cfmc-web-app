import { IoPerson } from "react-icons/io5";
import {
  SectionHeader,
  LongParagraph,
  Box,
  Grid,
  SectionSubheader,
  SmallText,
  Flex,
} from "@/components/core/ui";
import { TeamCard } from "@/components/core/cards";

interface BoardMember {
  boardMemberName: string;
  boardPosition: string;
  caption: string;
  email: string;
}

const boardMembers: BoardMember[] = [
  {
    boardMemberName: "Rev. Jonavern Pascual",
    boardPosition: "Pastor",
    caption: "Short caption here",
    email: "email@example.com",
  },
  {
    boardMemberName: "Rev. Jose Velasco",
    boardPosition: "Pastor",
    caption: "Another short caption",
    email: "email@example.com",
  },
  {
    boardMemberName: "Dss. Tessie Velasco",
    boardPosition: "Deaconess",
    caption: "Another short caption",
    email: "email@example.com",
  },
];

const TeamSection: React.FC = () => {
  return (
    <Box containerClassName="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      {/* <Box containerClassName="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <SectionHeader text="Meet Our Team" />
        <LongParagraph>Explore our talented board members.</LongParagraph>
      </Box> */}
      <Grid containerClassName="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {boardMembers.map((member, index) => (
          <TeamCard
            key={index}
            boardMemberName={member.boardMemberName}
            boardPosition={member.boardPosition}
            caption={member.caption}
            email={member.email}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
