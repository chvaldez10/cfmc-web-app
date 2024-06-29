import SimpleCard from "@/components/core/cards/SimpleCard";
import HeroCollage from "@/components/core/hero/HeroCollage";
import HeroWithSlideAnimation from "@/components/core/hero/HeroWithSlideAnimation";
import IframeMap from "@/data/hero/IframeMap";
import Footer from "@/components/Footer/Footer";

import CardWithImageContainer from "@/components/core/cards/CardWithImageContainer";
import { cardContainerItems } from "@/data/hero/CardContainer";

import EventBlog from "@/components/core/hero/EventBlog";
import { upcomingEvents } from "@/data/testData/churchEvents";

import HeroTextImage from "@/components/core/hero/HeroTextImage";
import CoverFlowSwiper from "@/components/core/gallery/CoverFlowSwiper";

import { verseTable } from "@/data/testData/verticalListTest";
import { visionStatement } from "@/data/hero/constants";

export default function Home() {
  return (
    <>
      <HeroCollage header={"Our Vision"} longParagraph={visionStatement} />

      <HeroWithSlideAnimation
        key={"Hero Map"}
        header={"Sunday Service"}
        verbiage="2:00 PM | 419 Northmount Drive NW, Calgary, AB"
        element={<IframeMap />}
        backgroundColor="bg-green-10"
      />

      <HeroTextImage
        header={"5th Sunday After Pentecost"}
        subheader={"Men's Empowerment Month"}
        longParagraph={verseTable[0].verse}
      />
      <EventBlog events={upcomingEvents} />
      <CoverFlowSwiper />
      <CardWithImageContainer />
      <SimpleCard cardContainerItems={cardContainerItems} />
      <Footer />
    </>
  );
}
