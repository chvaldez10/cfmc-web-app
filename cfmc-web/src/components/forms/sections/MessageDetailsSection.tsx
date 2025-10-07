"use client";

import { VStack, Text } from "@chakra-ui/react";
import { FormCheckboxGroup, FormTextarea } from "../inputs";
import { FormData, FormErrors } from "@/types/ui/forms";
import { ContactUsOptions } from "@/constants/shared/enums";
import {
  ContactFormLabels,
  ContactFormPlaceholders,
} from "@/constants/shared/contact";
import { FORM_COLORS } from "@/constants/theme/formStyles";

interface MessageDetailsSectionProps {
  formData: FormData;
  errors: FormErrors;
  onInputChange: (field: keyof FormData, value: string | string[]) => void;
}

export default function MessageDetailsSection({
  formData,
  errors,
  onInputChange,
}: MessageDetailsSectionProps) {
  return (
    <VStack spacing={6} w="full">
      <Text
        alignSelf="flex-start"
        fontSize="sm"
        fontWeight="bold"
        color={FORM_COLORS.sectionHeader}
        textTransform="uppercase"
        letterSpacing="wider"
        mb={1}
      >
        {ContactFormLabels.HOW_CAN_WE_HELP}
      </Text>

      <VStack spacing={5} w="full">
        <FormCheckboxGroup
          label={ContactFormLabels.WHAT_CAN_WE_HELP}
          options={Object.values(ContactUsOptions)}
          value={formData.subject}
          onChange={(values) => onInputChange("subject", values)}
          error={errors.subject}
          isRequired
          labelColor={FORM_COLORS.label}
          textColor={FORM_COLORS.text}
          errorColor={FORM_COLORS.error}
        />

        <FormTextarea
          label={ContactFormLabels.YOUR_MESSAGE}
          value={formData.message}
          onChange={(value) => onInputChange("message", value)}
          placeholder={ContactFormPlaceholders.SHARE_MESSAGE}
          error={errors.message}
          isRequired
          rows={5}
          labelColor={FORM_COLORS.label}
          mutedTextColor={FORM_COLORS.mutedText}
          focusBorderColor={FORM_COLORS.focusBorder}
          errorColor={FORM_COLORS.error}
        />
      </VStack>
    </VStack>
  );
}
