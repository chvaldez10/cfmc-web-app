"use client";

import { FC, ReactNode } from "react";
import { SectionSubheader, LongParagraph } from "@/components/core/ui";
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
      <div
        key={title}
        className="div-outside-width py-4 hover-animation hover-up h-[40vh] md:h-[30vh]"
        onClick={handleOpenModal}
      >
        {svgIcon}
        <SectionSubheader text={title.toUpperCase()} />
        <LongParagraph>{description}</LongParagraph>
      </div>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          title="Request Form"
          onClose={handleCloseModal}
        >
          <RequestForm defaultSelectedItem={title.toLowerCase()} />
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default InquiryCardItem;
