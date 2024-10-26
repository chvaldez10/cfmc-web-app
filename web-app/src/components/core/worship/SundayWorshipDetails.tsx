"use client";

import { FC } from "react";

// Components
import { SectionSubheader, OpenModalButton } from "@/components/core/ui";
import { VStack } from "@/components/core/hero";
import { IframeMap, PDFViewer } from "@/components/core/molecules";
import { CountdownTimer } from "@/components/core/worship";

// Constants
import { CHURCH_GOOGLE_MAP_SRC } from "@/data/constants/shared";

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
  const [leftColumnRef, leftColumnInView] = useInView();
  const [rightColumnRef, rightColumnInView] = useInView();
  const leftColumnAnimationClass = leftColumnInView
    ? "animate-slide-in-left"
    : "";
  const rightColumnAnimationClass = rightColumnInView
    ? "animate-slide-in-right"
    : "";

  return (
    <VStack
      containerClassName="bg-green-10 min-h-screen"
      layoutClass={"div-col-row"}
      isFloating={true}
      dataTestId="worship-details"
    >
      {/* Left Column */}
      <div
        ref={leftColumnRef}
        className={`div-outside-width resize-width-to-half text-center gap-2 ${leftColumnAnimationClass}`}
        data-testid="worship-details-text"
      >
        {/* Countdown Timer */}
        <CountdownTimer worshipStartDateTime={worshipStartDateTime} />

        {/* Worship Verbiage */}
        <h2 className="font-bold text-xl md:text-2xl lg:text-4xl">
          Join Our Next Service
        </h2>
        <SectionSubheader
          text={"2:00 PM - 419 Northmount Drive NW"}
          containerClassName="text-center long-paragraph-text-color"
        />

        {/* Liturgy Button */}
        <OpenModalButton
          variant="outline"
          title="Liturgy"
          containerClassName={`z-10 scale-up mx-auto`}
          itemClassName="resize-modal-large"
          modalElement={
            <PDFViewer header={"Liturgy"} src={liturgySrc as string} />
          }
        >
          View Liturgy
        </OpenModalButton>
      </div>

      {/* Right Column */}
      <div
        ref={rightColumnRef}
        className={`div-outside-width resize-width-to-half ${rightColumnAnimationClass}`}
        data-testid="worship-details-map"
      >
        <IframeMap
          src={CHURCH_GOOGLE_MAP_SRC}
          containerClassName="h-96 lg:h-576"
        />
      </div>
    </VStack>
  );
};

export default WorshipDetail;
