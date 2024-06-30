import {
  HeroCollage,
  HeroWithSlideAnimation,
  HeroTextImage,
  EventBlog,
} from "@/components/core/hero";

import {
  IframeMap,
  cardContainerItems,
  visionStatement,
  pastEvents1,
} from "@/data/hero";

import { SimpleCard, CardWithImageContainer } from "@/components/core/cards";

import { upcomingEvents, verseTable } from "@/data/testData";

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
        swiperImages={pastEvents1}
        containerClassName={"bg-white-10"}
      />

      <EventBlog events={upcomingEvents} />
      <CardWithImageContainer />
      <SimpleCard cardContainerItems={cardContainerItems} />
    </>
  );
}
