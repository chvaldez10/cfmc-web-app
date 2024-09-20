import { FC } from "react";
import { PDFViewer } from "@/components/core/molecules";
import {
  Box,
  SectionHeader,
  LongParagraph,
  OpenModalButton,
} from "@/components/core/ui";
import { VerticalContainerWrapper } from "@/components/core/hero";
import { getSundaysAndSpecialDays } from "@/utils/supabase/actions/sundayAndSpecialDaysActions";
import { HeroContentProps } from "@/types/layoutProps";

export interface PDFHeaderProps extends HeroContentProps {
  src?: string;
}

async function PDFHeader({ header, longParagraph, src }: PDFHeaderProps) {
  return (
    <VerticalContainerWrapper>
      <SectionHeader text={header} />
      <LongParagraph containerClassName="long-paragraph-text-color">
        {longParagraph}
      </LongParagraph>
      <OpenModalButton
        variant="outline"
        title="Liturgy"
        containerClassName={`z-10 scale-up mx-auto`}
        itemClassName="resize-modal-large"
        modalElement={<PDFViewer src={src as string} />}
      >
        View Liturgy
      </OpenModalButton>
    </VerticalContainerWrapper>
  );
}

export default PDFHeader;
