import { FC } from "react";
import { PDFViewer } from "@/components/core/molecules";
import {
  Box,
  SectionHeader,
  LongParagraph,
  OpenModalButton,
} from "@/components/core/ui";
import { liturgyVerbiage } from "@/data/hero/constants";
import { VerticalContainerWrapper } from "@/components/core/hero";

const LiturgyHeader: FC = () => {
  return (
    <VerticalContainerWrapper>
      <SectionHeader text="Liturgy" />
      <LongParagraph containerClassName="long-paragraph-text-color">
        {liturgyVerbiage}
      </LongParagraph>
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
    </VerticalContainerWrapper>
  );
};

export default LiturgyHeader;
