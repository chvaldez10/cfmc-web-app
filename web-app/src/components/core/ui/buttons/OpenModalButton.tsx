"use client";

import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ClientButtonProps } from "@/types/uiProps";
import {
  PurplePillButtonClient,
  VerticalCenteredModal,
} from "@/components/core/ui";
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
      {showModal &&
        createPortal(
          <VerticalCenteredModal
            ref={modalRef}
            header={title}
            onClick={handleCloseModal}
            containerClassName={itemClassName}
          >
            {modalElement}
          </VerticalCenteredModal>,
          document.body
        )}
    </>
  );
};

export default OpenModalButton;
