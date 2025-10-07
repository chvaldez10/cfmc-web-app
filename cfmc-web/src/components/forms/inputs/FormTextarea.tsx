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
}

export default function FormTextarea({
  label,
  value,
  onChange,
  placeholder,
  error,
  isRequired = false,
  rows = 5,
}: FormTextareaProps) {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel color="gray.700" fontSize="sm" fontWeight="semibold" mb={2}>
        {label}
      </FormLabel>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        size="lg"
        rows={rows}
        resize="vertical"
        focusBorderColor="purple.500"
        _placeholder={{ color: "gray.500" }}
      />
      <FormErrorMessage
        fontSize="xs"
        color="red.500"
        mt={1}
        fontWeight="medium"
      >
        {error}
      </FormErrorMessage>
    </FormControl>
  );
}
