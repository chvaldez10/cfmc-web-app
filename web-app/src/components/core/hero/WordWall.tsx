import { FC } from "react";
import { membersBirthday } from "@/data/testData/membersBirthday";
import SectionHeader from "../text/SectionHeader";
import WordWallCard from "@/components/core/cards/WordWallCard";

const WordWall: FC = () => {
  return (
    <div className="div-outside-width p-4">
      <div className="resize-hero-width">
        <SectionHeader text={"Birthdays"} className="text-center" />
        <div className="container px-5 py-8 md:py-14 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            {membersBirthday.map((memberBirthday, index) => (
              <WordWallCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordWall;
