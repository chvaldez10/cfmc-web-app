import { BoardAndLeadership } from "@/components/core/ministry";
import { getChurchMembersBoardMembers } from "@/utils/supabase/actions/churchMembersActions";
import { HeroOverlappingImage } from "@/components/core/hero";

const headerLongParagraph =
  "Our Board and Leadership. They are the backbone of our church. They lead us in our journey to serve Jesus Christ.";

export default async function page() {
  const boardMembers = await getChurchMembersBoardMembers();

  return (
    <>
      <HeroOverlappingImage
        header={"Board & Leaders"}
        subheader={"Meet Our Leadership Teams"}
        imagePath={"/background/Bible_with_leaf_resized.jpg"}
        longParagraph={headerLongParagraph}
        dataTestId={"board-and-leadership"}
      />

      <BoardAndLeadership boardMembers={boardMembers} header="Board Members" />
    </>
  );
}
