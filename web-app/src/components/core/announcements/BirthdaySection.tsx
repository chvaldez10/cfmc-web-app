import { FlexCenter, Flex, SectionHeader } from "@/components/core/ui";
import { ContainerWrapper } from "@/components/core/hero";
import { BalloonItem } from "@/components/core/molecules";
import { EmptySetFromSupabase } from "@/components/template";
import { getChurchMembersBirthdayByBirthMonth } from "@/utils/supabase/churchMembersActions";

async function BirthdaySection() {
  const currentMonth = new Date().getMonth() + 1;
  const membersBirthday = await getChurchMembersBirthdayByBirthMonth(
    currentMonth
  );

  if (!membersBirthday) {
    return <EmptySetFromSupabase longParagraph={"No birthdays this month"} />;
  }

  return (
    <>
      <FlexCenter containerClassName="p-4 resize-hero-width mx-auto">
        <SectionHeader text={"Birthdays"} containerClassName="text-center" />

        {membersBirthday.length === 0 && (
          <EmptySetFromSupabase longParagraph={"No birthdays this month"} />
        )}

        {membersBirthday.length > 0 && (
          <ContainerWrapper containerClassName="py-8 md:py-14">
            <Flex containerClassName="flex flex-wrap justify-between -mx-4 -my-8">
              {membersBirthday?.map((memberBirthday, index) => {
                const month = memberBirthday?.birthDate?.toLocaleString(
                  "en-US",
                  {
                    month: "long",
                  }
                );
                const day = memberBirthday?.birthDate?.getDate();
                return (
                  <BalloonItem
                    key={index}
                    month={month}
                    day={day}
                    fullName={`${memberBirthday.suffix} ${memberBirthday.firstName}`}
                  />
                );
              })}
            </Flex>
          </ContainerWrapper>
        )}
      </FlexCenter>
    </>
  );
}

export default BirthdaySection;
