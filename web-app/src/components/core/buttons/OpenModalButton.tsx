"use client";

import { FC, useState, ReactNode, useRef, useEffect } from "react";
import { clientButton } from "@/types/genericTypes";
import PurplePillButtonClient from "./PurplePillButtonClient";
import VerticalCenteredModal from "../modals/VerticalCenteredModal";

interface OpenModalButtonProps extends clientButton {
  modalElement: ReactNode;
}

const OpenModalButton: FC<OpenModalButtonProps> = ({
  variant = "filled",
  className,
  children,
  modalElement,
}) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  console.log(showModal);

  return (
    <>
      <PurplePillButtonClient
        variant={variant}
        className={className}
        onClick={handleClick}
        disabled={showModal}
      >
        {children}
      </PurplePillButtonClient>
      {showModal && (
        <VerticalCenteredModal ref={modalRef}>
          {modalElement}
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default OpenModalButton;
