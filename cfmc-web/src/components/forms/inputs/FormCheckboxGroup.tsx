"use client";

import {
  Field,
  CheckboxGroup,
  Checkbox,
  VStack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

interface FormCheckboxGroupProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (values: string[]) => void;
  error?: string;
  isRequired?: boolean;
}

export default function FormCheckboxGroup({
  label,
  options,
  value,
  onChange,
  error,
  isRequired = false,
}: FormCheckboxGroupProps) {
  const handleLabelClick = (option: string) => {
    const newValues = value.includes(option)
      ? value.filter((v) => v !== option)
      : [...value, option];
    onChange(newValues);
  };

  return (
    <Field.Root invalid={!!error} required={isRequired}>
      <Field.Label color="gray.700" fontSize="sm" fontWeight="semibold" mb={3}>
        {label}
        {isRequired && (
          <Text
            as="span"
            color="red.500"
            fontSize="sm"
            ml={1}
            fontWeight="normal"
          >
            *
          </Text>
        )}
      </Field.Label>
      <CheckboxGroup value={value} onValueChange={onChange}>
        <VStack gap={4} align="start" w="full">
          {options.map((option) => (
            <Flex key={option} align="start" w="full" gap={3}>
              <Checkbox
                value={option}
                size="md"
                colorPalette="purple"
                flexShrink={0}
              />
              <Box
                minWidth={0}
                onClick={() => handleLabelClick(option)}
                cursor="pointer"
              >
                <Text
                  fontSize="sm"
                  color="gray.800"
                  fontWeight="medium"
                  lineHeight="1.5"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  alignSelf="flex-start"
                >
                  {option}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </CheckboxGroup>
      <Field.ErrorText fontSize="xs" color="red.500" mt={2} fontWeight="medium">
        {error}
      </Field.ErrorText>
    </Field.Root>
  );
}
