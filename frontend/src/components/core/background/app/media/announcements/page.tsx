import HeroHeader from "@/components/core/hero/HeroHeader";
import VerticalList from "@/components/core/hero/VerticalList";
import { upcomingEvents } from "@/data/testData/verticalListTest";

const heroHeaderTitle = "Announcements";
const heroHeaderVerbiage = "4th Sunday After Pentecost";

export default function page() {
  return (
    <>
      <HeroHeader title={heroHeaderTitle} verbiage={heroHeaderVerbiage} />
      <VerticalList header={"Upcoming Events"} data={upcomingEvents} />
    </>
  );
}
