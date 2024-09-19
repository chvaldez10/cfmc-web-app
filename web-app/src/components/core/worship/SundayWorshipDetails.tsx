"use client";

import { FC } from "react";

// Components
import { SectionSubheader, OpenModalButton } from "@/components/core/ui";
import { FlexWrapper } from "@/components/core/hero";
import { IframeMap, PDFViewer } from "@/components/core/molecules";
import { CountdownTimer } from "@/components/core/worship";

// Constants
import { churchGoogleMapSrc } from "@/data/hero/constants";

// Hooks
import useInView from "@/hooks/useInView";

// Styles
import "@/styles/slide.css";

interface WorshipDetailProps {
  worshipStartDateTime: Date | undefined;
  liturgySrc: string | undefined;
}

const WorshipDetail: FC<WorshipDetailProps> = ({
  worshipStartDateTime,
  liturgySrc,
}) => {
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
      dataTestId="worship-details"
    >
      <div
        ref={textRef}
        className={`div-outside-width resize-width-to-half text-center gap-2 ${textAnimationClass}`}
        data-testid="worship-details-text"
      >
        {/* Countdown Timer */}
        <CountdownTimer worshipStartDateTime={worshipStartDateTime} />

        {/* Worship Verbiage */}
        <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
          Join Us On Our Next Service
        </h2>
        <SectionSubheader
          text={"2:00 PM @ 419 Northmount Drive NW"}
          containerClassName="text-center long-paragraph-text-color"
        />

        {/* Liturgy Button */}
        <OpenModalButton
          variant="outline"
          title="Liturgy"
          containerClassName={`z-10 scale-up mx-auto`}
          itemClassName="resize-modal-large"
          modalElement={<PDFViewer src={liturgySrc as string} />}
        >
          View Liturgy
        </OpenModalButton>
      </div>

      <div
        ref={elementRef}
        className={`div-outside-width resize-width-to-half ${elementAnimationClass}`}
        data-testid="worship-details-map"
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
