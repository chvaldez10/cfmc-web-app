"use client";

import { FC, ReactNode } from "react";
import { ClientButtonProps } from "@/types/genericTypes";
import { PurplePillButtonClient } from "@/components/core/ui";
import { VerticalCenteredModal } from "@/components/core/modals";
import useModal from "@/hooks/useModal";

interface OpenModalButtonProps extends ClientButtonProps {
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
