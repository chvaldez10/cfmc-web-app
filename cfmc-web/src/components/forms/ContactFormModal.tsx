"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useContactForm } from "@/hooks/useContactForm";
import { PersonalInfoSection, MessageDetailsSection } from "./sections";
import {
  ContactFormLabels,
  ContactFormToastMessages,
} from "@/constants/shared/contact";
import { FORM_COLORS, FORM_STYLES } from "@/constants/theme/formStyles";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ContactFormModal({
  isOpen,
  onClose,
  title = "Contact Us",
}: ContactFormModalProps) {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } =
    useContactForm();

  const onFormSubmit = async (e: React.FormEvent) => {
    const success = await handleSubmit(e);
    if (success) {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack
            spacing={FORM_STYLES.spacing.main}
            as="form"
            onSubmit={onFormSubmit}
          >
            {/* Personal Information Section */}
            <VStack spacing={FORM_STYLES.spacing.section} w="full">
              <PersonalInfoSection
                formData={formData}
                errors={errors}
                onInputChange={handleInputChange}
              />
            </VStack>

            {/* Message Details Section */}
            <MessageDetailsSection
              formData={formData}
              errors={errors}
              onInputChange={handleInputChange}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              colorScheme="purple"
              size="lg"
              w="full"
              h="56px"
              isLoading={isSubmitting}
              loadingText={ContactFormToastMessages.LOADING_TEXT}
              borderRadius="xl"
              fontSize="md"
              fontWeight="bold"
              letterSpacing="wide"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "xl",
                bg: "purple.600",
              }}
              _active={{
                transform: "translateY(0)",
                bg: "purple.700",
              }}
              _focus={{
                boxShadow: `0 0 0 3px ${FORM_COLORS.focusBorder}40`,
              }}
              transition="all 0.2s ease"
              mt={4}
            >
              {ContactFormLabels.SEND_MESSAGE}
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
