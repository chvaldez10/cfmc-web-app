"use client";

import { Field, Input, Text } from "@chakra-ui/react";

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  isOptional?: boolean;
  type?: "text" | "email" | "tel";
}

export default function FormInput({
  label,
  value,
  onChange,
  placeholder,
  error,
  isRequired = false,
  isOptional = false,
  type = "text",
}: FormInputProps) {
  return (
    <Field.Root invalid={!!error} required={isRequired}>
      <Field.Label color="gray.700" fontSize="sm" fontWeight="semibold" mb={2}>
        {label}
        {isOptional && (
          <Text
            as="span"
            color="gray.500"
            fontSize="xs"
            ml={2}
            fontWeight="normal"
          >
            (Optional)
          </Text>
        )}
      </Field.Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        size="lg"
        _placeholder={{ color: "gray.500" }}
      />
      <Field.ErrorText fontSize="xs" color="red.500" mt={1} fontWeight="medium">
        {error}
      </Field.ErrorText>
    </Field.Root>
  );
}
