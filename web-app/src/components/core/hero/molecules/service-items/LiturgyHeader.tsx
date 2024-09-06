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
        className={`z-10 scale-up mx-auto`}
        modalElement={<PDFViewer pdfFile={"liturgy.pdf"} />}
      >
        View Liturgy
      </OpenModalButton>
    </VerticalContainerWrapper>
  );
};

export default LiturgyHeader;
