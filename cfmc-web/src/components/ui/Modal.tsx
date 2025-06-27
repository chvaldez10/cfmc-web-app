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
} from "@chakra-ui/react";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footerActions?: {
    label: string;
    onClick: () => void;
    variant?: ButtonProps["colorScheme"];
    isLoading?: boolean;
  }[];
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
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footerActions = [],
  size = "md",
  closeOnOverlayClick = true,
  closeOnEsc = true,
}) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEsc={closeOnEsc}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {footerActions.length > 0 && (
          <ModalFooter>
            {footerActions.map((action, index) => (
              <Button
                key={index}
                colorScheme={action.variant || "blue"}
                onClick={action.onClick}
                isLoading={action.isLoading}
                ml={index > 0 ? 3 : 0}
              >
                {action.label}
              </Button>
            ))}
          </ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  );
};

export default ReusableModal;
