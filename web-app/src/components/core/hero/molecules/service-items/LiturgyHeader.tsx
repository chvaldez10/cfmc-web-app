import { FC } from "react";
import { ContainerWrapper, PDFViewer } from "@/components/core/hero";
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
        itemClassName="resize-modal-full-width"
        modalElement={
          <PDFViewer
            src={
              "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/docs/server-items/liturgy.pdf?t=2024-09-06T04%3A05%3A31.012Z"
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
