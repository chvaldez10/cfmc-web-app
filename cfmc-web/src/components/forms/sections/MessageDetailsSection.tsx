"use client";

import { VStack, Text } from "@chakra-ui/react";
import { FormCheckboxGroup, FormTextarea } from "../inputs";
import { FormData, FormErrors } from "@/types/ui/forms";
// import { ContactUsOptions } from "@/constants/shared/enums";
import {
  ContactFormLabels,
  ContactFormPlaceholders,
} from "@/constants/shared/contact";

interface MessageDetailsSectionProps {
  formData: FormData;
  errors: FormErrors;
  onInputChange: (field: keyof FormData, value: string | string[]) => void;
  checkboxOptions: string[];
}

export default function MessageDetailsSection({
  formData,
  errors,
  onInputChange,
  checkboxOptions,
}: MessageDetailsSectionProps) {
  return (
    <VStack spacing={6} w="full">
      <Text
        alignSelf="flex-start"
        fontSize="sm"
        fontWeight="bold"
        color="gray.600"
        textTransform="uppercase"
        letterSpacing="wider"
        mb={1}
      >
        {ContactFormLabels.HOW_CAN_WE_HELP}
      </Text>

      <VStack spacing={5} w="full">
        <FormCheckboxGroup
          label={ContactFormLabels.WHAT_CAN_WE_HELP}
          options={Object.values(checkboxOptions)}
          value={formData.subject}
          onChange={(values) => onInputChange("subject", values)}
          error={errors.subject}
          isRequired
        />

        <FormTextarea
          label={ContactFormLabels.YOUR_MESSAGE}
          value={formData.message}
          onChange={(value) => onInputChange("message", value)}
          placeholder={ContactFormPlaceholders.SHARE_MESSAGE}
          error={errors.message}
          isRequired
          rows={5}
        />
      </VStack>
    </VStack>
  );
}
