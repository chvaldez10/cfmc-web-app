"use client";

import { VStack } from "@chakra-ui/react";
import { FormInput } from "../inputs";
import { FormData, FormErrors } from "@/types/ui/forms";
import {
  ContactFormLabels,
  ContactFormPlaceholders,
} from "@/constants/shared/contact";
import { FORM_COLORS } from "@/constants/theme/formStyles";

interface PersonalInfoSectionProps {
  formData: FormData;
  errors: FormErrors;
  onInputChange: (field: keyof FormData, value: string) => void;
}

export default function PersonalInfoSection({
  formData,
  errors,
  onInputChange,
}: PersonalInfoSectionProps) {
  return (
    <VStack spacing={5} w="full">
      <FormInput
        label={ContactFormLabels.FULL_NAME}
        value={formData.name}
        onChange={(value) => onInputChange("name", value)}
        placeholder={ContactFormPlaceholders.ENTER_FULL_NAME}
        error={errors.name}
        isRequired
        labelColor={FORM_COLORS.label}
        mutedTextColor={FORM_COLORS.mutedText}
        focusBorderColor={FORM_COLORS.focusBorder}
        errorColor={FORM_COLORS.error}
      />

      <FormInput
        label={ContactFormLabels.EMAIL_ADDRESS}
        type="email"
        value={formData.email}
        onChange={(value) => onInputChange("email", value)}
        placeholder={ContactFormPlaceholders.EMAIL_EXAMPLE}
        error={errors.email}
        isRequired
        labelColor={FORM_COLORS.label}
        mutedTextColor={FORM_COLORS.mutedText}
        focusBorderColor={FORM_COLORS.focusBorder}
        errorColor={FORM_COLORS.error}
      />

      <FormInput
        label={ContactFormLabels.PHONE_NUMBER}
        type="tel"
        value={formData.phone}
        onChange={(value) => onInputChange("phone", value)}
        placeholder={ContactFormPlaceholders.PHONE_EXAMPLE}
        isOptional
        labelColor={FORM_COLORS.label}
        mutedTextColor={FORM_COLORS.mutedText}
        focusBorderColor={FORM_COLORS.focusBorder}
        errorColor={FORM_COLORS.error}
      />
    </VStack>
  );
}
