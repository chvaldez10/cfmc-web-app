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

  const accentColor = useColorModeValue("purple.600", "purple.400");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
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
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      bg={bgColor} // 🆕 matches ContactDetails
      p={{ base: 6, md: 8 }}
      borderRadius="2xl" // 🆕 same as ContactDetails
      w="full"
      h="full"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        {/* Form Fields */}
        <VStack spacing={4} w="full">
          <FormControl isInvalid={!!errors.name}>
            <FormLabel color={textColor}>Name *</FormLabel>
            <Input
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your full name"
              size="md"
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel color={textColor}>Email *</FormLabel>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@example.com"
              size="md"
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel color={textColor}>Phone (Optional)</FormLabel>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Your phone number"
              size="md"
            />
          </FormControl>

          <FormControl isInvalid={!!errors.subject}>
            <FormLabel color={textColor}>Subject *</FormLabel>
            <Select
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              placeholder="Select a subject"
              size="md"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Worship Services">Worship Services</option>
              <option value="Ministries">Ministries</option>
              <option value="Events">Events</option>
              <option value="Prayer Request">Prayer Request</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Other">Other</option>
            </Select>
            <FormErrorMessage>{errors.subject}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.message}>
            <FormLabel color={textColor}>Message *</FormLabel>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us how we can help you..."
              size="md"
              rows={5}
              resize="vertical"
            />
            <FormErrorMessage>{errors.message}</FormErrorMessage>
          </FormControl>
        </VStack>

        {/* Submit Button */}
        <Button
          type="submit"
          colorScheme="purple"
          size="lg"
          w="full"
          isLoading={isSubmitting}
          loadingText="Sending..."
          borderRadius="lg"
          _hover={{
            transform: "translateY(-1px)",
            boxShadow: "lg",
          }}
        >
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}
