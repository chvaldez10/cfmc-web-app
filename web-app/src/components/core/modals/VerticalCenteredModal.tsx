import { FC, forwardRef, ReactNode } from "react";
import { modalProps } from "@/types/genericTypes";

interface VerticalCenteredModalProps extends modalProps {
  children: ReactNode;
  // showModal: boolean;
  // onClose: () => void;
}

const VerticalCenteredModal = forwardRef<
  HTMLDivElement,
  VerticalCenteredModalProps
>(
  (
    {
      title,
      content,
      children,
      // showModal = true,
      // onClose,
    },
    modalRef
  ) => {
    return (
      <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
        <div
          className="bg-white-0 p-6 rounded-lg shadow-lg w-11/12 max-w-md mx-auto"
          ref={modalRef}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default VerticalCenteredModal;
