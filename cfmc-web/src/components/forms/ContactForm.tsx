"use client";

import { Box, VStack } from "@chakra-ui/react";
import { useContactForm } from "@/hooks/useContactForm";
import { PersonalInfoSection, MessageDetailsSection } from "./sections";
import { SubmitButton } from "@/components/ui/button";
import {
  ContactFormLabels,
  ContactFormToastMessages,
} from "@/constants/shared/contact";
import { ContactUsOptions } from "@/constants/shared/enums";

export default function ContactForm() {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } =
    useContactForm();

  return (
    <Box
      bg="white"
      p={{ base: 6, md: 8, lg: 10 }}
      borderRadius="2xl"
      w="full"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="lg"
      _hover={{ boxShadow: "xl" }}
      transition="all 0.3s ease"
    >
      <VStack
        spacing={{ base: 6, md: 8 }}
        as="form"
        onSubmit={handleSubmit}
        data-testid="contact-form"
      >
        {/* Personal Information Section */}
        <VStack spacing={6} w="full" data-testid="personal-info-section">
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
          checkboxOptions={Object.values(ContactUsOptions)}
        />

        {/* Submit Button */}
        <SubmitButton
          isLoading={isSubmitting}
          loadingText={ContactFormToastMessages.LOADING_TEXT}
        >
          {ContactFormLabels.SEND_MESSAGE}
        </SubmitButton>
      </VStack>
    </Box>
  );
}
