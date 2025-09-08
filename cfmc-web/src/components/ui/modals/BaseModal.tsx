import React from "react";
import {
  Dialog,
  Button,
  ButtonProps,
  useBreakpointValue,
  Flex,
  Portal,
  CloseButton,
} from "@chakra-ui/react";

interface FooterAction extends ButtonProps {
  label: string;
  onClick?: () => void;
  isPrimary?: boolean;
}

interface BaseModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  footerActions?: FooterAction[];
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "full";
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  renderHeader?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  hideCloseButton?: boolean;
}

const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footerActions,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  renderHeader,
  renderFooter,
  hideCloseButton = false,
}) => {
  const modalSize = useBreakpointValue({ base: size, md: size });

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(details) => !details.open && onClose?.()}
      size={modalSize}
      closeOnInteractOutside={closeOnOverlayClick}
      closeOnEscape={closeOnEsc}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            {renderHeader ? (
              renderHeader()
            ) : title ? (
              <Dialog.Header>{title}</Dialog.Header>
            ) : null}

            {!hideCloseButton && (
              <Dialog.CloseTrigger asChild>
                <CloseButton />
              </Dialog.CloseTrigger>
            )}

            <Dialog.Body>{children}</Dialog.Body>

            {renderFooter ? (
              renderFooter()
            ) : footerActions?.length ? (
              <Dialog.Footer>
                <Flex w="full" justify="flex-end" gap={3} flexWrap="wrap">
                  {footerActions.map((action, index) => (
                    <Button
                      key={index}
                      onClick={action.onClick}
                      colorScheme={
                        action.isPrimary
                          ? action.colorScheme ?? "blue"
                          : undefined
                      }
                      variant={action.isPrimary ? "solid" : "ghost"}
                      isLoading={action.isLoading}
                      {...action}
                    >
                      {action.label}
                    </Button>
                  ))}
                </Flex>
              </Dialog.Footer>
            ) : null}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default BaseModal;
