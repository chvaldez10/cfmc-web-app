"use client";

import { FC } from "react";
import { SectionSubheader, OpenModalButton } from "@/components/core/ui";
import { FlexWrapper } from "@/components/core/hero";
import { IframeMap, PDFViewer } from "@/components/core/molecules";
import { churchGoogleMapSrc } from "@/data/hero/constants";
import { CountdownTimer } from "@/components/core/worship";
import useInView from "@/hooks/useInView";
import "@/styles/slide.css";

interface WorshipDetailProps {
  worshipStartDateTime: Date | undefined;
}

// This component takes the layout and ref use from HeroSlideClient
const WorshipDetail: FC<WorshipDetailProps> = ({ worshipStartDateTime }) => {
  const [textRef, textInView] = useInView();
  const [elementRef, elementInView] = useInView();
  const layoutClass = "div-col-row";
  const textAnimationClass = textInView ? "animate-slide-in-left" : "";
  const elementAnimationClass = elementInView ? "animate-slide-in-right" : "";

  return (
    <FlexWrapper
      containerClassName="bg-green-10 min-h-[90vh]"
      layoutClass={layoutClass}
      isFloating={true}
    >
      <div
        ref={textRef}
        className={`div-outside-width resize-width-to-half text-center gap-2 ${textAnimationClass}`}
      >
        <CountdownTimer worshipStartDateTime={worshipStartDateTime} />
        <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
          Join Us On Our Next Service
        </h2>
        <SectionSubheader
          text={"2:00 PM @ 419 Northmount Drive NW"}
          containerClassName="text-center long-paragraph-text-color"
        />

        <OpenModalButton
          variant="outline"
          title="Liturgy"
          containerClassName={`z-10 scale-up mx-auto`}
          itemClassName="resize-modal-large"
          modalElement={
            <PDFViewer
              src={
                "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/docs/liturgies/September%2022.pdf?t=2024-09-19T04%3A15%3A07.133Z"
              }
            />
          }
        >
          View Liturgy
        </OpenModalButton>
      </div>

      <div
        ref={elementRef}
        className={`div-outside-width resize-width-to-half ${elementAnimationClass}`}
      >
        <IframeMap
          src={churchGoogleMapSrc}
          containerClassName="h-96 lg:h-576"
        />
      </div>
    </FlexWrapper>
  );
};

export default WorshipDetail;
