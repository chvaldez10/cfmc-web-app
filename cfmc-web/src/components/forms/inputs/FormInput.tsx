"use client";

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  isOptional?: boolean;
  type?: "text" | "email" | "tel";
  labelColor?: string;
  mutedTextColor?: string;
  focusBorderColor?: string;
  errorColor?: string;
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
  labelColor = "gray.700",
  mutedTextColor = "gray.500",
  focusBorderColor = "purple.500",
  errorColor = "red.500",
}: FormInputProps) {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel color={labelColor} fontSize="sm" fontWeight="semibold" mb={2}>
        {label}
        {isOptional && (
          <Text
            as="span"
            color={mutedTextColor}
            fontSize="xs"
            ml={2}
            fontWeight="normal"
          >
            (Optional)
          </Text>
        )}
      </FormLabel>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        size="lg"
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
