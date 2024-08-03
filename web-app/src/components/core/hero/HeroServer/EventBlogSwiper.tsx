import { FC } from "react";
import { FlexWrapper } from "@/components/core/hero";
import { SwiperScrollbar } from "@/components/core/gallery/";
import { SectionHeader } from "@/components/core/text";

const EventBlogSwiper: FC = () => {
  return (
    <FlexWrapper
      containerClassName={"h-[50vh] "}
      layoutClass={"flex-col space-y-8"}
    >
      <SectionHeader text={"Upcoming Events "} className={"text-center"} />
      <SwiperScrollbar />
    </FlexWrapper>
  );
};

export default EventBlogSwiper;
