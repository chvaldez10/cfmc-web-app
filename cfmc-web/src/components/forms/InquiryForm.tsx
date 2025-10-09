"use client";

import { VStack } from "@chakra-ui/react";
import { useContactForm } from "@/hooks/useContactForm";
import { PersonalInfoSection } from "./sections";
import { FormTextarea } from "./inputs";
import { SubmitButton } from "@/components/ui/button";
import {
  ContactFormLabels,
  ContactFormPlaceholders,
  ContactFormToastMessages,
} from "@/constants/shared/contact";
import { useEffect } from "react";

interface InquiryFormProps {
  preSelectedSubject: string[];
  onSubmitSuccess?: () => void;
}

export default function InquiryForm({
  preSelectedSubject,
  onSubmitSuccess,
}: InquiryFormProps) {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } =
    useContactForm();

  // Set pre-selected subject on mount
  useEffect(() => {
    handleInputChange("subject", preSelectedSubject);
  }, [preSelectedSubject]);

  const onFormSubmit = async (e: React.FormEvent) => {
    const success = await handleSubmit(e);
    if (success && onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  return (
    <VStack
      spacing={{ base: 5, md: 6 }}
      as="form"
      onSubmit={onFormSubmit}
      w="full"
    >
      {/* Personal Information Section */}
      <PersonalInfoSection
        formData={formData}
        errors={errors}
        onInputChange={handleInputChange}
      />

      {/* Message Field */}
      <FormTextarea
        label={ContactFormLabels.YOUR_MESSAGE}
        value={formData.message}
        onChange={(value) => handleInputChange("message", value)}
        placeholder={ContactFormPlaceholders.SHARE_MESSAGE}
        error={errors.message}
        isRequired
        rows={5}
      />

      {/* Submit Button */}
      <SubmitButton
        isLoading={isSubmitting}
        loadingText={ContactFormToastMessages.LOADING_TEXT}
      >
        {ContactFormLabels.SEND_MESSAGE}
      </SubmitButton>
    </VStack>
  );
}
