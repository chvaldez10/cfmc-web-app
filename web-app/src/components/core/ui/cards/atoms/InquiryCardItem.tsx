"use client";

import { FC } from "react";
import {
  SectionSubheader,
  LongParagraph,
  VerticalCenteredModal,
} from "@/components/core/ui";
import RequestForm from "@/components/core/forms/RequestForm";
import useModal from "@/hooks/useModal";
import { IconProps } from "@/types/uiProps";

interface InquiryCardItemProps extends IconProps {}

const InquiryCardItem: FC<InquiryCardItemProps> = ({
  label,
  description,
  svgIcon,
}) => {
  const { showModal, modalRef, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <div
        key={label}
        className="div-outside-width py-4 hover-animation hover-up h-[40vh] md:h-[30vh]"
        onClick={handleOpenModal}
      >
        {svgIcon}
        <SectionSubheader text={label.toUpperCase()} />
        <LongParagraph>{description}</LongParagraph>
      </div>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          header="Request Form"
          onClick={handleCloseModal}
          containerClassName={"resize-modal-small"}
        >
          <RequestForm defaultSelectedItem={label} />
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default InquiryCardItem;
