import { forwardRef } from "react";
import { SectionSubheader } from "@/components/core/ui";
import { CloseButton } from "@/components/core/ui";
import { ModalProps } from "@/types/genericTypes";
import { FlexCenter, Box, Flex } from "@/components/core/ui";

interface VerticalCenteredModalProps extends ModalProps {
  onClose: () => void;
}

const VerticalCenteredModal = forwardRef<
  HTMLDivElement,
  VerticalCenteredModalProps
>(({ children, title, onClose }, modalRef) => {
  return (
    <FlexCenter containerClassName="fixed inset-0 z-30 overflow-x-hidden overflow-y-auto">
      <Box
        containerClassName="resize-modal border border-gray-200 rounded-lg bg-white-0 animate-translate-up text-gray-900"
        ref={modalRef}
      >
        <Flex containerClassName="div-outside-width-justify-between px-5 py-3 border-b border-gray-200 bg-purple-50 md:rounded-t-lg">
          <SectionSubheader text={title} />
          <CloseButton onClose={onClose} />
        </Flex>
        <Box containerClassName="p-5">{children}</Box>
      </Box>
    </FlexCenter>
  );
});

VerticalCenteredModal.displayName = "VerticalCenteredModal";

export default VerticalCenteredModal;
