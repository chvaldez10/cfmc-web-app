"use client";

import { FC, ReactNode } from "react";
import { clientButton } from "@/types/genericTypes";
import PurplePillButtonClient from "./PurplePillButtonClient";
import VerticalCenteredModal from "../modals/VerticalCenteredModal";
import useModal from "@/hooks/useModal";

interface OpenModalButtonProps extends clientButton {
  modalElement: ReactNode;
  title: string;
}

const OpenModalButton: FC<OpenModalButtonProps> = ({
  variant = "filled",
  className,
  children,
  modalElement,
  title,
}) => {
  const { showModal, modalRef, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <PurplePillButtonClient
        variant={variant}
        className={className}
        onClick={handleOpenModal}
        disabled={showModal}
      >
        {children}
      </PurplePillButtonClient>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          title={title}
          onClose={handleCloseModal}
        >
          {modalElement}
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default OpenModalButton;
