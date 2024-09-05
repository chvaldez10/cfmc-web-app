import { FC } from "react";
import { ContainerWrapper } from "@/components/core/hero";
import {
  Box,
  SectionHeader,
  LongParagraph,
  OpenModalButton,
} from "@/components/core/ui";
import { liturgyVerbiage } from "@/data/hero/constants";
import LiturgyIFrameModal from "./LiturgyIFrameModal";

const LiturgyHeader: FC = () => {
  return (
    <>
      <ContainerWrapper containerClassName="py-8 md:py-16">
        <Box containerClassName="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center space-y-2 md:space-y-4">
          <SectionHeader text="Liturgy" />
          <LongParagraph containerClassName="long-paragraph-text-color">
            {liturgyVerbiage}
          </LongParagraph>
          <OpenModalButton
            variant="outline"
            title="Liturgy"
            className={`z-10 scale-up mx-auto`}
            modalElement={<LiturgyIFrameModal />}
          >
            View Liturgy
          </OpenModalButton>
        </Box>
      </ContainerWrapper>
    </>
  );
};

export default LiturgyHeader;
