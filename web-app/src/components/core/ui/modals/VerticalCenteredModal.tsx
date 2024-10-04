import { forwardRef } from "react";
import {
  SectionSubheader,
  CloseButton,
  FlexCenter,
  Box,
  Flex,
} from "@/components/core/ui";
import { ModalProps } from "@/types/layoutProps";

interface VerticalCenteredModalProps extends ModalProps {}

const VerticalCenteredModal = forwardRef<
  HTMLDivElement,
  VerticalCenteredModalProps
>(({ children, header, onClick, containerClassName }, modalRef) => {
  return (
    <FlexCenter containerClassName="fixed inset-0 z-30 overflow-x-hidden overflow-y-auto">
      <div
        className={`border border-gray-200 rounded-lg shadow-lg bg-white-0 animate-translate-up text-gray-900 ${containerClassName}`}
        ref={modalRef}
      >
        <Flex containerClassName="div-outside-width-justify-between p-4 border-b border-gray-200 bg-purple-50 md:rounded-t-lg">
          <SectionSubheader text={header} />
          <CloseButton onClose={onClick} />
        </Flex>
        <Box containerClassName={`bg-white-0`}>{children}</Box>
      </div>
    </FlexCenter>
  );
});

VerticalCenteredModal.displayName = "VerticalCenteredModal";

export default VerticalCenteredModal;
