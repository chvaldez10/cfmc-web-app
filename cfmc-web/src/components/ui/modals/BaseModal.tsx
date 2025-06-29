import React from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ButtonProps,
  useBreakpointValue,
  Flex,
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
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose ?? (() => {})}
      size={modalSize}
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEsc={closeOnEsc}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        {renderHeader ? (
          renderHeader()
        ) : title ? (
          <ModalHeader>{title}</ModalHeader>
        ) : null}

        {!hideCloseButton && <ModalCloseButton />}

        <ModalBody>{children}</ModalBody>

        {renderFooter ? (
          renderFooter()
        ) : footerActions?.length ? (
          <ModalFooter>
            <Flex w="full" justify="flex-end" gap={3} flexWrap="wrap">
              {footerActions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.onClick}
                  colorScheme={
                    action.isPrimary ? action.colorScheme ?? "blue" : undefined
                  }
                  variant={action.isPrimary ? "solid" : "ghost"}
                  isLoading={action.isLoading}
                  {...action}
                >
                  {action.label}
                </Button>
              ))}
            </Flex>
          </ModalFooter>
        ) : null}
      </ModalContent>
    </ChakraModal>
  );
};

export default BaseModal;
