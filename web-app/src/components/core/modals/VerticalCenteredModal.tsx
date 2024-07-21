import { forwardRef, ReactNode } from "react";
import { SectionSubheader } from "@/components/core/text/";
import { CloseButton } from "@/components/core/buttons";

interface VerticalCenteredModalProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
}

const VerticalCenteredModal = forwardRef<
  HTMLDivElement,
  VerticalCenteredModalProps
>(({ children, title, onClose }, modalRef) => {
  // TODO: Improve styling
  return (
    <div className="fixed div-outside-width inset-0 z-30 overflow-x-hidden overflow-y-auto">
      <div
        className="my-5 mx-auto resize-modal border border-gray-200 rounded-lg bg-white-0 animate-translate-up text-gray-600"
        ref={modalRef}
      >
        <div className="div-outside-width-justify-between px-5 py-3 border-b border-gray-200 bg-purple-50 md:rounded-t-lg">
          <SectionSubheader text={title} />
          <CloseButton onClose={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
});

export default VerticalCenteredModal;
