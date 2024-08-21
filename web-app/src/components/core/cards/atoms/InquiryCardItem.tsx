"use client";

import { FC, ReactNode } from "react";
import {
  SectionSubheader,
  LongParagraph,
  FlexCenter,
} from "@/components/core/ui";
import { VerticalCenteredModal } from "@/components/core/modals";
import RequestForm from "@/components/core/forms/RequestForm";
import useModal from "@/hooks/useModal";

interface InquiryCardItemProps {
  title: string;
  description: string;
  svgIcon: ReactNode;
}

const InquiryCardItem: FC<InquiryCardItemProps> = ({
  title,
  description,
  svgIcon,
}) => {
  const { showModal, modalRef, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <FlexCenter
        key={title}
        containerClassName="py-4 hover-animation hover-up h-[40vh] md:h-[30vh]"
        onClick={handleOpenModal}
      >
        {svgIcon}
        <SectionSubheader text={title.toUpperCase()} />
        <LongParagraph>{description}</LongParagraph>
      </FlexCenter>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          title="Request Form"
          onClose={handleCloseModal}
        >
          <RequestForm />
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default InquiryCardItem;
