"use client";

import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Select,
  FormErrorMessage,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

import { ContactUsOptions } from "@/constants/shared/enums";
import {
  ContactFormLabels,
  ContactFormPlaceholders,
  ContactFormValidationMessages,
  ContactFormToastMessages,
} from "@/constants/shared/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const toast = useToast();

  const textColor = useColorModeValue("gray.700", "gray.200");
  const mutedTextColor = useColorModeValue("gray.600", "gray.400");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const focusBorderColor = useColorModeValue("purple.500", "purple.300");

  // Mock function to populate form with sample data for testing
  const mockSuccessfulInput = () => {
    const mockData: FormData = {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "(403) 555-0123",
      subject: ContactUsOptions.WORSHIP_SERVICES,
      message:
        "I would like to know more about your Sunday worship services and what time they start. Also, do you have any programs for children?",
    };

    setFormData(mockData);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim())
      newErrors.name = ContactFormValidationMessages.ENTER_NAME;
    if (!formData.email.trim()) {
      newErrors.email = ContactFormValidationMessages.ENTER_EMAIL;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = ContactFormValidationMessages.VALID_EMAIL;
    }
    if (!formData.subject.trim())
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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("formData", formData);

      toast({
        title: ContactFormToastMessages.SUCCESS_TITLE,
        description: ContactFormToastMessages.SUCCESS_DESCRIPTION,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: ContactFormToastMessages.ERROR_TITLE,
        description: error as string,
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
      p={{ base: 6, md: 8 }}
      borderRadius="2xl"
      w="full"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
      transition="all 0.2s"
    >
      <VStack spacing={8} as="form" onSubmit={handleSubmit}>
        <VStack spacing={5} w="full">
          <VStack spacing={4} w="full">
            <FormControl isInvalid={!!errors.name} isRequired>
              <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
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
              <FormErrorMessage fontSize="sm">{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email} isRequired>
              <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
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
              <FormErrorMessage fontSize="sm">{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
                {ContactFormLabels.PHONE_NUMBER}
                <Text as="span" color={mutedTextColor} fontSize="xs" ml={1}>
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
        <VStack spacing={5} w="full">
          <Text
            alignSelf="flex-start"
            fontSize="sm"
            fontWeight="semibold"
            color={mutedTextColor}
            textTransform="uppercase"
            letterSpacing="wide"
          >
            {ContactFormLabels.HOW_CAN_WE_HELP}
          </Text>

          <VStack spacing={4} w="full">
            <FormControl isInvalid={!!errors.subject} isRequired>
              <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
                {ContactFormLabels.WHAT_CAN_WE_HELP}
              </FormLabel>
              <Select
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                placeholder={ContactFormPlaceholders.CHOOSE_OPTION}
                size="lg"
                focusBorderColor={focusBorderColor}
                _placeholder={{ color: mutedTextColor }}
              >
                {Object.values(ContactUsOptions).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
              <FormErrorMessage fontSize="sm">
                {errors.subject}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.message} isRequired>
              <FormLabel color={textColor} fontSize="sm" fontWeight="medium">
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
              <FormErrorMessage fontSize="sm">
                {errors.message}
              </FormErrorMessage>
            </FormControl>
          </VStack>
        </VStack>

        {/* Mock Data Button (for testing) */}
        <Button
          type="button"
          colorScheme="teal"
          size="md"
          w="full"
          onClick={mockSuccessfulInput}
          borderRadius="lg"
          py={4}
          fontSize="sm"
          fontWeight="medium"
          _hover={{
            transform: "translateY(-1px)",
            boxShadow: "md",
          }}
          _active={{
            transform: "translateY(0)",
          }}
          transition="all 0.2s"
        >
          🎯 Load Mock Data (Testing)
        </Button>

        {/* Submit Button */}
        <Button
          type="submit"
          colorScheme="purple"
          size="lg"
          w="full"
          isLoading={isSubmitting}
          loadingText={ContactFormToastMessages.LOADING_TEXT}
          borderRadius="lg"
          py={6}
          fontSize="md"
          fontWeight="semibold"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          _active={{
            transform: "translateY(0)",
          }}
          transition="all 0.2s"
        >
          {ContactFormLabels.SEND_MESSAGE}
        </Button>
      </VStack>
    </Box>
  );
}
