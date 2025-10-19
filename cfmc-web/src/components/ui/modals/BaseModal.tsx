import React from "react";
import {
  DialogRoot,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  Button,
  ButtonProps,
  useBreakpointValue,
  Flex,
  Box,
} from "@chakra-ui/react";

interface FooterAction extends Omit<ButtonProps, 'isLoading'> {
  label: string;
  onClick?: () => void;
  isPrimary?: boolean;
  loading?: boolean;
}

type ModalSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full"
  | "cover";

interface BaseModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  footerActions?: FooterAction[];
  size?:
    | ModalSize
    | {
        base?: ModalSize;
        sm?: ModalSize;
        md?: ModalSize;
        lg?: ModalSize;
        xl?: ModalSize;
        "2xl"?: ModalSize;
      };
  closeOnInteractOutside?: boolean;
  closeOnEscape?: boolean;
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
  closeOnInteractOutside = true,
  closeOnEscape = true,
  renderHeader,
  renderFooter,
  hideCloseButton = false,
}) => {
  const modalSize = useBreakpointValue(
    typeof size === "object" ? size : { base: size, md: size }
  );

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(e) => !e.open && onClose?.()}
      size={modalSize}
      closeOnInteractOutside={closeOnInteractOutside}
      closeOnEscape={closeOnEscape}
      placement="center"
    >
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent>
          {renderHeader ? (
            renderHeader()
          ) : title ? (
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
          ) : null}

          {!hideCloseButton && <DialogCloseTrigger />}

          <DialogBody>{children}</DialogBody>

          {renderFooter ? (
            renderFooter()
          ) : footerActions?.length ? (
            <DialogFooter>
              <Flex w="full" justify="flex-end" gap={3} flexWrap="wrap">
                {footerActions.map((action, index) => (
                  <Button
                    key={index}
                    onClick={action.onClick}
                    colorScheme={
                      action.isPrimary ? action.colorScheme ?? "blue" : undefined
                    }
                    variant={action.isPrimary ? "solid" : "ghost"}
                    loading={action.loading}
                    {...action}
                  >
                    {action.label}
                  </Button>
                ))}
              </Flex>
            </DialogFooter>
          ) : null}
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};

export default BaseModal;
