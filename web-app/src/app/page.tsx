import {
  HeroCollageClient,
  HeroSlideClient,
  HeroTextImageClient,
  EventBlog,
} from "@/components/core/hero";

import {
  IframeMap,
  cardContainerItems,
  visionStatement,
  pastEvents1,
  communityBuilding1,
} from "@/data/hero";

import { SimpleCard, CardWithImageContainer } from "@/components/core/cards";
import { upcomingEvents } from "@/data/testData";
import {
  featuredEvent1Verbiage,
  communityBuilding1Verbiage,
} from "@/data/hero/constants";

import { NextImage } from "@/components/core/gallery";

export default function Home() {
  return (
    <>
      <HeroCollageClient
        header={"Our Vision"}
        longParagraph={visionStatement}
      />

      <HeroSlideClient
        header={"Sunday Service"}
        verbiage="2:00 PM | 419 Northmount Drive NW, Calgary, AB"
        element={<IframeMap />}
        backgroundColor="bg-green-10"
      />

      <HeroTextImageClient
        header={"Men's Empowerment Month"}
        longParagraph={featuredEvent1Verbiage}
        swiperImages={pastEvents1}
        containerClassName={"bg-white-10"}
      />

      <HeroTextImageClient
        header={"Small Groups"}
        userSubHeader={"Community Building"}
        longParagraph={communityBuilding1Verbiage}
        swiperImages={communityBuilding1}
        reverse={true}
        containerClassName={"bg-violet-10"}
      />

      <HeroSlideClient
        header={"Next Big Event"}
        verbiage="Next Big Event Description"
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
      <CardWithImageContainer />
      <SimpleCard cardContainerItems={cardContainerItems} />
    </>
  );
}
