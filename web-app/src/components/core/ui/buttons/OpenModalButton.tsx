"use client";

import { FC, ReactNode } from "react";
import { ClientButtonProps } from "@/types/uiProps";
import { PurplePillButtonClient } from "@/components/core/ui";
import { VerticalCenteredModal } from "@/components/core/modals";
import useModal from "@/hooks/useModal";

interface OpenModalButtonProps extends ClientButtonProps {
  modalElement: ReactNode;
  itemClassName?: string;
  title: string;
}

const OpenModalButton: FC<OpenModalButtonProps> = ({
  variant = "filled",
  containerClassName,
  children,
  modalElement,
  itemClassName = "resize-modal-small",
  title,
}) => {
  const { showModal, modalRef, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <PurplePillButtonClient
        variant={variant}
        containerClassName={containerClassName}
        onClick={handleOpenModal}
        disabled={showModal}
      >
        {children}
      </PurplePillButtonClient>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          header={title}
          onClick={handleCloseModal}
          containerClassName={itemClassName}
        >
          {modalElement}
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default OpenModalButton;
