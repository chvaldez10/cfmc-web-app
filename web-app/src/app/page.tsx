// Components
import {
  HeroHome,
  HeroSlideClient,
  HeroImageSwiper,
} from "@/components/core/hero";
import { EventBlogSwiper } from "@/components/core/events";
import { InquiryCard, CardWithImage, NextImage } from "@/components/core/ui";
import { VerseOfTheDay, SundayWorshipDetails } from "@/components/core/worship";

// Server Actions
import { getSundaysAndSpecialDays } from "@/utils/supabase/actions/sundayAndSpecialDaysActions";
import { getEventById } from "@/utils/supabase/actions/eventsActions";

// Constants
import {
  pastEvents1,
  communityBuilding1,
  featuredMonthlyThemeVerbiage,
  featureCommunityBuildingVerbiage,
  nextBigEventDescription,
} from "@/data/hero";

export default async function Home() {
  const sundaysAndSpecialDays = await getSundaysAndSpecialDays();
  const eventDetails = await getEventById(
    sundaysAndSpecialDays?.eventId as number
  );
  const worshipStartDateTime = eventDetails?.startDate;

  return (
    <>
      <HeroHome nextServiceSlug={eventDetails?.slug} />

      <SundayWorshipDetails
        worshipStartDateTime={worshipStartDateTime}
        liturgySrc={sundaysAndSpecialDays?.liturgy}
      />

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
