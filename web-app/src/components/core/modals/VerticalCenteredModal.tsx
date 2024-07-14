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
      <div className="flex justify-center items-center fixed inset-0 z-30 overflow-x-hidden overflow-y-auto">
        <div
          className="relative w-auto my-5 mx-auto max-w-3xl h-screen md:h-auto bg-white border border-gray-200 rounded-lg bg-white-0"
          ref={modalRef}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default VerticalCenteredModal;
