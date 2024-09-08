import { Box, Grid, SectionHeader, LongParagraph } from "@/components/core/ui";
import { TeamCard } from "@/components/core/cards";
import { ChurchMembers } from "@/types/supabaseTypes";
import { HeroContentProps } from "@/types/genericTypes";

export interface TeamSectionProps extends HeroContentProps {
  boardMembers: ChurchMembers[] | null;
}

async function TeamSection({
  boardMembers,
  header,
  longParagraph,
}: TeamSectionProps) {
  return (
    <Box containerClassName="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <Box containerClassName="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <SectionHeader text={header} />
        <LongParagraph>{longParagraph}</LongParagraph>
      </Box>
      <Grid containerClassName="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {boardMembers?.map((member, index) => (
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
