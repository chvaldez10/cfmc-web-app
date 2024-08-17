import { FC } from "react";
import { SectionHeader } from "@/components/core/ui";
import { membersBirthday } from "@/data/testData/membersBirthday";
import { getChurchMembersBirthdayForMonth } from "@/utils/supabase/churchMembersActions";
import BallonItem from "../molecules/atoms/BalloonItem";

async function WordWall() {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const membersBirthdayTest = await getChurchMembersBirthdayForMonth(
    currentMonth,
    currentYear
  );

  console.log(currentMonth, currentYear);

  console.log(membersBirthdayTest);

  return (
    <div className="div-outside-width p-4">
      <div className="resize-hero-width">
        <SectionHeader text={"Birthdays"} containerClassName="text-center" />
        <div className="container px-5 py-8 md:py-14 mx-auto">
          <div className="flex flex-wrap justify-between -mx-4 -my-8">
            {membersBirthday.map((memberBirthday, index) => (
              <BallonItem key={index} {...memberBirthday} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordWall;
