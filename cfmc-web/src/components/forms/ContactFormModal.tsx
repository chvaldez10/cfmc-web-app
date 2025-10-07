"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
} from "@chakra-ui/react";
import { useContactForm } from "@/hooks/useContactForm";
import { PersonalInfoSection, MessageDetailsSection } from "./sections";
import { SubmitButton } from "@/components/ui/button";
import {
  ContactFormLabels,
  ContactFormToastMessages,
} from "@/constants/shared/contact";

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
            spacing={{ base: 6, md: 8 }}
            as="form"
            onSubmit={onFormSubmit}
          >
            {/* Personal Information Section */}
            <VStack spacing={6} w="full">
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
            <SubmitButton
              isLoading={isSubmitting}
              loadingText={ContactFormToastMessages.LOADING_TEXT}
            >
              {ContactFormLabels.SEND_MESSAGE}
            </SubmitButton>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
