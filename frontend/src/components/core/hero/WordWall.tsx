import { FC } from "react";
import { membersBirthday } from "@/data/testData/membersBirthday";
import SectionHeader from "../text/SectionHeader";
import WordWallCard from "@/components/core/cards/WordWallCard";

const WordWall: FC = () => {
  return (
    <>
      <SectionHeader text={"Birthdays"} />
      <div className="container px-5 py-8 md:py-14 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          {membersBirthday.map((memberBirthday, index) => (
            <WordWallCard />
          ))}
        </div>
      </div>
    </>
  );
};

export default WordWall;
