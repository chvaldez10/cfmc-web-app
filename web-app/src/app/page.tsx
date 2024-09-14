import {
  HeroHome,
  HeroSlideClient,
  HeroImageSwiper,
  VerseOfTheDay,
  EventBlogSwiper,
  LiturgyHeader,
  ServiceItem,
} from "@/components/core/hero";

import { pastEvents1, communityBuilding1 } from "@/data/hero";
import { InquiryCard, CardWithImage } from "@/components/core/ui";
import {
  featuredMonthlyThemeVerbiage,
  featureCommunityBuildingVerbiage,
  nextBigEventDescription,
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
      <HeroHome nextServiceSlug={eventDetails?.slug} />
      <LiturgyHeader />
      <ServiceItem />
      <HeroImageSwiper
        header={"Discipleship Month"}
        longParagraph={featuredMonthlyThemeVerbiage}
        subheader={sundaysAndSpecialDays?.sundayEventName}
        swiperImages={pastEvents1}
        containerClassName={"bg-white-10 min-h-[80vh]"}
        reverse={true}
      />

      <HeroImageSwiper
        header={"Small Groups"}
        subheader={"Community Building"}
        longParagraph={featureCommunityBuildingVerbiage}
        swiperImages={communityBuilding1}
        containerClassName={"bg-violet-10 min-h-[80vh]"}
      />

      <HeroSlideClient
        header={"Next Big Event"}
        longParagraph={nextBigEventDescription}
        containerClassName="min-h-[80vh]"
        reverse={true}
        isFloating={true}
      >
        <NextImage
          width={"w-full"}
          height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
          src={pastEvents1[1].src}
          alt={"Next Big Event Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroSlideClient>

      <EventBlogSwiper />
      <CardWithImage />
      <InquiryCard />
      <VerseOfTheDay />
    </>
  );
}
