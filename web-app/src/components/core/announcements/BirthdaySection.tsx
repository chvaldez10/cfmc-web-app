import { SectionHeader } from "@/components/core/ui";
import { getChurchMembersBirthdayByBirthMonth } from "@/utils/supabase/churchMembersActions";
import { FlexCenter, Flex } from "@/components/core/ui";
import { ContainerWrapper, BalloonItem } from "@/components/core/hero";
import { EmptySetFromSupabase } from "@/components/template";

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
