"use client";

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
import useNextSunday from "@/hooks/useNextSunday";

export default function Home() {
  const nextSunday = useNextSunday();
  console.log(`Next Sunday: ${nextSunday}`);

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
        header={"Men's Empowerment Month"}
        subheader={"6th Sunday After pentecost"}
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
