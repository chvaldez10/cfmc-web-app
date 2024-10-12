import { FC } from "react";
import { PDFViewer } from "@/components/core/molecules";
import {
  SectionHeader,
  LongParagraph,
  OpenModalButton,
} from "@/components/core/ui";
import { VStack } from "@/components/core/hero";
import { HeroContentProps } from "@/types/layoutProps";

export interface PDFHeaderProps extends HeroContentProps {
  src?: string;
  buttonText: string;
}

const PDFHeader: FC<PDFHeaderProps> = ({
  header,
  longParagraph,
  src,
  buttonText,
}) => {
  return (
    <VStack
      containerClassName={`min-h-[30vh] lg:min-h-[50vh] text-center`}
      layoutClass="flex flex-col"
    >
      <SectionHeader text={header} />

      <LongParagraph containerClassName="long-paragraph-text-color">
        {longParagraph}
      </LongParagraph>

      <OpenModalButton
        variant="outline"
        title="Liturgy"
        containerClassName={`z-10 scale-up mx-auto`}
        itemClassName="resize-modal-large"
        modalElement={<PDFViewer header={header} src={src as string} />}
      >
        {buttonText}
      </OpenModalButton>
    </VStack>
  );
};

export default PDFHeader;
