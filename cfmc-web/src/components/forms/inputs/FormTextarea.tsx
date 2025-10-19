"use client";

import { Field, Textarea } from "@chakra-ui/react";

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
    <Field.Root invalid={!!error} required={isRequired}>
      <Field.Label color="gray.700" fontSize="sm" fontWeight="semibold" mb={2}>
        {label}
      </Field.Label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        size="lg"
        rows={rows}
        resize="vertical"
        _placeholder={{ color: "gray.500" }}
      />
      <Field.ErrorText fontSize="xs" color="red.500" mt={1} fontWeight="medium">
        {error}
      </Field.ErrorText>
    </Field.Root>
  );
}
