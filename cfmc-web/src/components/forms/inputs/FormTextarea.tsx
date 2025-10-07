"use client";

import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";

interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  rows?: number;
  labelColor?: string;
  mutedTextColor?: string;
  focusBorderColor?: string;
  errorColor?: string;
}

export default function FormTextarea({
  label,
  value,
  onChange,
  placeholder,
  error,
  isRequired = false,
  rows = 5,
  labelColor = "gray.700",
  mutedTextColor = "gray.500",
  focusBorderColor = "purple.500",
  errorColor = "red.500",
}: FormTextareaProps) {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel color={labelColor} fontSize="sm" fontWeight="semibold" mb={2}>
        {label}
      </FormLabel>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        size="lg"
        rows={rows}
        resize="vertical"
        focusBorderColor={focusBorderColor}
        _placeholder={{ color: mutedTextColor }}
      />
      <FormErrorMessage
        fontSize="xs"
        color={errorColor}
        mt={1}
        fontWeight="medium"
      >
        {error}
      </FormErrorMessage>
    </FormControl>
  );
}
