import SimpleCard from "@/components/core/cards/SimpleCard";
import HeroCollage from "@/components/core/hero/HeroCollage";
import HeroSimple from "@/components/core/hero/HeroSimple";
import IframeMap from "@/data/hero/IframeMap";
import Footer from "@/components/Footer/Footer";

import CardWithImageContainer from "@/components/core/cards/CardWithImageContainer";
import { cardContainerItems } from "@/data/hero/CardContainer";

import EventContainer from "@/components/core/hero/EventContainer";
import { upcomingEvents } from "@/data/testData/upcomingEvents";

export default function Home() {
  return (
    <>
      <HeroCollage />
      <HeroSimple
        key={"Hero Map"}
        header={"Sunday Service"}
        verbiage="2:00 PM | 419 Northmount Drive NW, Calgary, AB"
        element={<IframeMap />}
        backgroundColor="bg-neutral-50"
      />
      <EventContainer events={upcomingEvents} />
      <CardWithImageContainer />
      <SimpleCard cardContainerItems={cardContainerItems} />
      <Footer />
    </>
  );
}
