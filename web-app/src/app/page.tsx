import {
  HeroCollage,
  HeroSlideClient,
  HeroImage,
  VerseOfTheDay,
  EventBlogSwiper,
  IframeMap,
} from "@/components/core/hero";

import {
  cardContainerItems,
  visionStatementLong,
  pastEvents1,
  communityBuilding1,
} from "@/data/hero";

import { SimpleCard, CardWithImage } from "@/components/core/cards";
import {
  featuredMonthlyThemeVerbiage,
  featureCommunityBuildingVerbiage,
  nextBigEventDescription,
  churchGoogleMapSrc,
} from "@/data/hero/constants";

import { NextImage } from "@/components/core/gallery";

import { getSundaysAndSpecialDays } from "@/utils/supabase/sundayAndSpecialDaysActions";
import { getEventById } from "@/utils/supabase/eventsActions";

export default async function Home() {
  const sundaysAndSpecialDays = await getSundaysAndSpecialDays();

  const eventDetails = await getEventById(
    sundaysAndSpecialDays?.eventId as number
  );

  return (
    <>
      <HeroCollage nextServiceSlug={eventDetails?.slug} />

      <HeroSlideClient
        header={"Sunday Service"}
        longParagraph="2:00 PM | 419 Northmount Drive NW, Calgary, AB"
        containerClassName="bg-green-10 min-h-screen"
        element={<IframeMap src={churchGoogleMapSrc} />}
        isFloating={true}
      />

      <HeroImage
        header={"Discipleship Month"}
        longParagraph={featuredMonthlyThemeVerbiage}
        subheader={sundaysAndSpecialDays?.sundayEventName}
        swiperImages={pastEvents1}
        containerClassName={"bg-white-10 min-h-screen"}
        reverse={true}
      />

      <HeroImage
        header={"Small Groups"}
        subheader={"Community Building"}
        longParagraph={featureCommunityBuildingVerbiage}
        swiperImages={communityBuilding1}
        containerClassName={"bg-violet-10 min-h-screen"}
      />

      <HeroSlideClient
        header={"Next Big Event"}
        longParagraph={nextBigEventDescription}
        containerClassName="min-h-screen"
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
        isFloating={true}
      />

      <EventBlogSwiper />
      <CardWithImage />
      <SimpleCard cardContainerItems={cardContainerItems} />
      <VerseOfTheDay />
    </>
  );
}
