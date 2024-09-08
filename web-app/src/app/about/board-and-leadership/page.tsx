import { HeroHeader } from "@/components/core/hero";
import { TeamSection } from "@/components/core/hero";
import { getChurchMembersBoardMembers } from "@/utils/supabase/churchMembersActions";

const headerLongParagraph =
  "Our Board and Leadership. They are the backbone of our church. They lead us in our journey to serve Jesus Christ.";

export default async function page() {
  const boardMembers = await getChurchMembersBoardMembers();

  return (
    <>
      <HeroHeader
        header="Board & Leadership"
        longParagraph={headerLongParagraph}
      />
      <TeamSection
        boardMembers={boardMembers}
        header="Meet Our Board Members"
        longParagraph="Explore our talented board members."
      />
    </>
  );
}
