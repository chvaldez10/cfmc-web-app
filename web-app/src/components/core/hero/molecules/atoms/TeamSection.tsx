import { Box, Grid } from "@/components/core/ui";
import { TeamCard } from "@/components/core/cards";
import { getChurchMembersBoardMembers } from "@/utils/supabase/churchMembersActions";

async function TeamSection() {
  const boardMembersTest = await getChurchMembersBoardMembers();
  console.log(boardMembersTest);

  return (
    <Box containerClassName="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      {/* <Box containerClassName="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <SectionHeader text="Meet Our Team" />
        <LongParagraph>Explore our talented board members.</LongParagraph>
      </Box> */}
      <Grid containerClassName="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {boardMembersTest?.map((member, index) => (
          <TeamCard
            key={index}
            boardMemberName={`${member.suffix} ${member.firstName} ${member.lastName}`}
            role={member.role}
            caption={member.bio}
            email={member.email}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default TeamSection;
