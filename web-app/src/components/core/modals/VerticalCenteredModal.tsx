import { FC, forwardRef, ReactNode } from "react";

interface VerticalCenteredModalProps {
  children: ReactNode;
}

const VerticalCenteredModal = forwardRef<
  HTMLDivElement,
  VerticalCenteredModalProps
>(({ children }, modalRef) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-30 overflow-x-hidden overflow-y-auto">
      <div
        className="relative w-auto my-5 mx-auto md:max-w-2xl h-screen md:h-auto border border-gray-200 rounded-lg bg-white-0"
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
});

export default VerticalCenteredModal;
