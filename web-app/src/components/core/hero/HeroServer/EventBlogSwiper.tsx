import { FC } from "react";
import { VerticalWrapper, FlexWrapper } from "@/components/core/hero";
import { SwiperScrollbar } from "@/components/core/gallery/";

const EventBlogSwiper: FC = () => {
  return (
    <FlexWrapper
      containerClassName={"h-[60vh] w-full"}
      layoutClass={"flex-col"}
    >
      <SwiperScrollbar />
    </FlexWrapper>
  );
};

export default EventBlogSwiper;
