import { HeroHeader, VerticalList, WordWall } from "@/components/core/hero";
import { announcements } from "@/data/testData/verticalListTest";

const heroHeaderTitle = "Announcements";
const heroHeaderVerbiage = "4th Sunday After Pentecost";

export default function page() {
  return (
    <>
      <HeroHeader title={heroHeaderTitle} verbiage={heroHeaderVerbiage} />
      <VerticalList header={"Upcoming Events"} data={announcements} />
      <WordWall />
    </>
  );
}
