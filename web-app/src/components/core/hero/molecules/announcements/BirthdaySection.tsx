import { SectionHeader } from "@/components/core/ui";
import { membersBirthday } from "@/data/testData/membersBirthday";
import { getChurchMembersBirthdayForMonth } from "@/utils/supabase/churchMembersActions";
import { FlexCenter, Flex } from "@/components/core/ui";
import { ContainerWrapper } from "@/components/core/hero";
import BallonItem from "../atoms/BalloonItem";

async function WordWall() {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const membersBirthdayTest = await getChurchMembersBirthdayForMonth(
    currentMonth,
    currentYear
  );

  console.log(membersBirthdayTest);

  return (
    <FlexCenter containerClassName="p-4 resize-hero-width mx-auto">
      <SectionHeader text={"Birthdays"} containerClassName="text-center" />
      <ContainerWrapper containerClassName="py-8 md:py-14">
        <Flex containerClassName="flex flex-wrap justify-between -mx-4 -my-8">
          {membersBirthday.map((memberBirthday, index) => (
            <BallonItem key={index} {...memberBirthday} />
          ))}
        </Flex>
      </ContainerWrapper>
    </FlexCenter>
  );
}

export default WordWall;
