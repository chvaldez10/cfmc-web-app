// Components
import {
  HeroHome,
  HeroSlideClient,
  HeroImageSwiper,
} from "@/components/core/hero";
import { EventBlogSwiper } from "@/components/core/events";
import {
  InquiryCard,
  MinistryDetailCards,
  NextImage,
} from "@/components/core/ui";
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
import { IMAGE_SIZE_LARGE_HERO } from "@/data/constants/shared";

export default async function Home() {
  const sundaysAndSpecialDays = await getSundaysAndSpecialDays();
  const eventDetails = await getEventById(
    sundaysAndSpecialDays?.eventId as number
  );
  const worshipStartDateTime = eventDetails?.startDate;

  console.log(sundaysAndSpecialDays);

  return (
    <>
      <HeroHome nextServiceSlug={eventDetails?.slug} />

      <SundayWorshipDetails
        worshipStartDateTime={worshipStartDateTime}
        liturgySrc={sundaysAndSpecialDays?.liturgy}
      />

      {/* Theme of the Month */}
      <HeroImageSwiper
        header={"Discipleship Month"}
        longParagraph={featuredMonthlyThemeVerbiage}
        subheader={sundaysAndSpecialDays?.sundayEventName}
        swiperImages={pastEvents1}
        containerClassName={"bg-white-10 min-h-screen"}
        reverse={true}
        dataTestId={"theme-of-the-month"}
      />

      {/* Community Building */}
      <HeroImageSwiper
        header={"Small Groups"}
        subheader={"Community Building"}
        longParagraph={featureCommunityBuildingVerbiage}
        swiperImages={communityBuilding1}
        containerClassName={"bg-violet-10 min-h-screen"}
        dataTestId={"community-building"}
      />

      {/* Next Big Event */}
      <HeroSlideClient
        header={"Next Big Event"}
        longParagraph={nextBigEventDescription}
        containerClassName="min-h-screen"
        reverse={true}
        isFloating={true}
        dataTestId={"next-big-event"}
      >
        <NextImage
          width={"w-full"}
          height={IMAGE_SIZE_LARGE_HERO}
          src={pastEvents1[1].src}
          alt={"Next Big Event Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroSlideClient>

      <EventBlogSwiper />
      <MinistryDetailCards />
      <InquiryCard />
      <VerseOfTheDay />
    </>
  );
}
