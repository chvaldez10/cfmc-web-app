"use client";

import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Checkbox,
  CheckboxGroup,
  FormErrorMessage,
  useToast,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string[];
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

import { ContactUsOptions } from "@/constants/shared/enums";
import {
  ContactFormLabels,
  ContactFormPlaceholders,
  ContactFormValidationMessages,
  ContactFormToastMessages,
} from "@/constants/shared/contact";
import { submitContactForm } from "@/lib/supabase/actions/contact-submissions";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: [],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const toast = useToast();

  // Consistent color scheme following design system
  const textColor = "gray.800";
  const labelColor = "gray.700";
  const mutedTextColor = "gray.500";
  const sectionHeaderColor = "gray.600";
  const bgColor = "white";
  const borderColor = "gray.200";
  const focusBorderColor = "purple.500";
  const errorColor = "red.500";

  const handleInputChange = (
    field: keyof FormData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleCheckboxChange = (values: string[]) => {
    handleInputChange("subject", values);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim())
      newErrors.name = ContactFormValidationMessages.ENTER_NAME;
    if (!formData.email.trim()) {
      newErrors.email = ContactFormValidationMessages.ENTER_EMAIL;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = ContactFormValidationMessages.VALID_EMAIL;
    }
    if (formData.subject.length === 0)
      newErrors.subject = ContactFormValidationMessages.SELECT_SUBJECT;
    if (!formData.message.trim())
      newErrors.message = ContactFormValidationMessages.SHARE_MESSAGE;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.success) {
        toast({
          title: ContactFormToastMessages.SUCCESS_TITLE,
          description: ContactFormToastMessages.SUCCESS_DESCRIPTION,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });

        // Reset form on successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: [],
          message: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: ContactFormToastMessages.ERROR_TITLE,
        description:
          error instanceof Error
            ? error.message
            : ContactFormToastMessages.ERROR_DESCRIPTION,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      bg={bgColor}
      p={{ base: 6, md: 8, lg: 10 }}
      borderRadius="2xl"
      w="full"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="lg"
      _hover={{ boxShadow: "xl" }}
      transition="all 0.3s ease"
    >
      <VStack spacing={{ base: 6, md: 8 }} as="form" onSubmit={handleSubmit}>
        <VStack spacing={6} w="full">
          <VStack spacing={5} w="full">
            <FormControl isInvalid={!!errors.name} isRequired>
              <FormLabel
                color={labelColor}
                fontSize="sm"
                fontWeight="semibold"
                mb={2}
              >
                {ContactFormLabels.FULL_NAME}
              </FormLabel>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder={ContactFormPlaceholders.ENTER_FULL_NAME}
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
                {errors.name}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email} isRequired>
              <FormLabel
                color={labelColor}
                fontSize="sm"
                fontWeight="semibold"
                mb={2}
              >
                {ContactFormLabels.EMAIL_ADDRESS}
              </FormLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder={ContactFormPlaceholders.EMAIL_EXAMPLE}
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
                {errors.email}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel
                color={labelColor}
                fontSize="sm"
                fontWeight="semibold"
                mb={2}
              >
                {ContactFormLabels.PHONE_NUMBER}
                <Text
                  as="span"
                  color={mutedTextColor}
                  fontSize="xs"
                  ml={2}
                  fontWeight="normal"
                >
                  {ContactFormLabels.OPTIONAL}
                </Text>
              </FormLabel>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder={ContactFormPlaceholders.PHONE_EXAMPLE}
                size="lg"
                focusBorderColor={focusBorderColor}
                _placeholder={{ color: mutedTextColor }}
              />
            </FormControl>
          </VStack>
        </VStack>

        {/* Message Details */}
        <VStack spacing={6} w="full">
          <Text
            alignSelf="flex-start"
            fontSize="sm"
            fontWeight="bold"
            color={sectionHeaderColor}
            textTransform="uppercase"
            letterSpacing="wider"
            mb={1}
          >
            {ContactFormLabels.HOW_CAN_WE_HELP}
          </Text>

          <VStack spacing={5} w="full">
            <FormControl isInvalid={!!errors.subject}>
              <FormLabel
                color={labelColor}
                fontSize="sm"
                fontWeight="semibold"
                mb={3}
              >
                {ContactFormLabels.WHAT_CAN_WE_HELP}
                <Text
                  as="span"
                  color="red.500"
                  fontSize="sm"
                  ml={1}
                  fontWeight="normal"
                >
                  *
                </Text>
              </FormLabel>
              <CheckboxGroup
                value={formData.subject}
                onChange={handleCheckboxChange}
              >
                <VStack spacing={4} align="start" w="full">
                  {Object.values(ContactUsOptions).map((option) => (
                    <Flex key={option} align="start" w="full" gap={3}>
                      <Checkbox
                        value={option}
                        size="md"
                        colorScheme="purple"
                        flexShrink={0}
                      />
                      <Box
                        minWidth={0}
                        onClick={() => {
                          const currentValues = formData.subject;
                          const newValues = currentValues.includes(option)
                            ? currentValues.filter((v) => v !== option)
                            : [...currentValues, option];
                          handleCheckboxChange(newValues);
                        }}
                        cursor="pointer"
                      >
                        <Text
                          fontSize="sm"
                          color={textColor}
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
              <FormErrorMessage
                fontSize="xs"
                color={errorColor}
                mt={2}
                fontWeight="medium"
              >
                {errors.subject}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.message} isRequired>
              <FormLabel
                color={labelColor}
                fontSize="sm"
                fontWeight="semibold"
                mb={2}
              >
                {ContactFormLabels.YOUR_MESSAGE}
              </FormLabel>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder={ContactFormPlaceholders.SHARE_MESSAGE}
                size="lg"
                rows={5}
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
                {errors.message}
              </FormErrorMessage>
            </FormControl>
          </VStack>
        </VStack>

        {/* Submit Button */}
        <Button
          type="submit"
          colorScheme="purple"
          size="lg"
          w="full"
          h="56px"
          isLoading={isSubmitting}
          loadingText={ContactFormToastMessages.LOADING_TEXT}
          borderRadius="xl"
          fontSize="md"
          fontWeight="bold"
          letterSpacing="wide"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "xl",
            bg: "purple.600",
          }}
          _active={{
            transform: "translateY(0)",
            bg: "purple.700",
          }}
          _focus={{
            boxShadow: `0 0 0 3px ${focusBorderColor}40`,
          }}
          transition="all 0.2s ease"
          mt={4}
        >
          {ContactFormLabels.SEND_MESSAGE}
        </Button>
      </VStack>
    </Box>
  );
}
