import { HeroHalfHeader, HeroSlideClient } from "@/components/core/hero";
import { NextImage } from "@/components/core/gallery";
import { Box } from "@/components/core/ui";

export default function page() {
  return (
    <>
      <HeroHalfHeader />
      <HeroSlideClient
        header={"Have Fun While You Serve"}
        longParagraph={"Have Fun While You Serve Description"}
        containerClassName="min-h-[80vh] "
        reverse={true}
        isFloating={true}
      >
        <NextImage
          width={"w-full"}
          height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
          src={"/featured/ministries/1.jpg"}
          alt={"Next Big Event Image"}
          imageClassName={"rounded-lg object-center"}
        />
      </HeroSlideClient>
    </>
  );
}
