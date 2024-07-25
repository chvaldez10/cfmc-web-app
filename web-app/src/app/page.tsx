import {
  HeroCollage,
  HeroSlideClient,
  HeroImageClient,
  EventBlog,
} from "@/components/core/hero";

import {
  IframeMap,
  cardContainerItems,
  visionStatementLong,
  pastEvents1,
  communityBuilding1,
} from "@/data/hero";

import { SimpleCard, CardWithImage } from "@/components/core/cards";
import { upcomingEvents } from "@/data/testData";
import {
  featuredEvent1Verbiage,
  communityBuilding1Verbiage,
} from "@/data/hero/constants";

import { NextImage } from "@/components/core/gallery";

export default function Home() {
  return (
    <>
      <HeroCollage header={"Our Vision "} longParagraph={visionStatementLong} />

      <HeroSlideClient
        header={"Sunday Service"}
        longParagraph="2:00 PM | 419 Northmount Drive NW, Calgary, AB"
        element={<IframeMap />}
        containerClassName="bg-green-10"
      />

      <HeroImageClient
        header={"Men's Empowerment Month"}
        longParagraph={featuredEvent1Verbiage}
        swiperImages={pastEvents1}
        containerClassName={"bg-white-10"}
      />

      <HeroImageClient
        header={"Small Groups"}
        userSubHeader={"Community Building"}
        longParagraph={communityBuilding1Verbiage}
        swiperImages={communityBuilding1}
        reverse={true}
        containerClassName={"bg-violet-10"}
      />

      <HeroSlideClient
        header={"Next Big Event"}
        longParagraph="Next Big Event Description"
        element={
          <NextImage
            width={"w-full"}
            height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
            src={"/featured/past-events-1/2.jpg"}
            alt={"Next Big Event Image"}
            imageClassName={"rounded-lg object-center"}
          />
        }
        reverse={true}
      />

      <EventBlog events={upcomingEvents} />
      <CardWithImage />
      <SimpleCard cardContainerItems={cardContainerItems} />
    </>
  );
}
