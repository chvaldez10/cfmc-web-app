"use client";

import { FC, ReactNode } from "react";
import { SectionSubheader, LongParagraph } from "../../text";
import VerticalCenteredModal from "../../modals/VerticalCenteredModal";
import RequestForm from "../../forms/RequestForm";
import useModal from "@/hooks/useModal";

interface SimpleCardItemProps {
  title: string;
  description: string;
  svgIcon: ReactNode;
}

const SimpleCardItem: FC<SimpleCardItemProps> = ({
  title,
  description,
  svgIcon,
}) => {
  const { showModal, modalRef, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <div
        key={title}
        className="div-outside-width py-4 hover-animation hover-up h-[50vh] md:h-[30vh]"
        onClick={handleOpenModal}
      >
        <div className="text-6xl mb-4">{svgIcon}</div>
        <SectionSubheader text={title.toUpperCase()} />
        <LongParagraph>{description}</LongParagraph>
      </div>
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

export default SimpleCardItem;
