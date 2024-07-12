"use client";

import { FC, useState, ReactNode, useRef, useEffect } from "react";
import { clientButton } from "@/types/genericTypes";
import PurplePillButtonClient from "./PurplePillButtonClient";

interface OpenModalButtonProps extends clientButton {
  modalElement?: ReactNode | undefined;
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
      >
        {children}
      </PurplePillButtonClient>
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white-0 p-6 rounded-lg shadow-lg w-11/12 max-w-md mx-auto"
            ref={modalRef}
          >
            <div className="text-center text-lg">Test</div>
          </div>
        </div>
      )}
    </>
  );
};

export default OpenModalButton;
