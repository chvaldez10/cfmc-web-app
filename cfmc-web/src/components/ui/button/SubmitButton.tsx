"use client";

import { Button, ButtonProps } from "@chakra-ui/react";

interface SubmitButtonProps extends Omit<ButtonProps, "type"> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export default function SubmitButton({
  isLoading = false,
  loadingText = "Submitting...",
  children,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      colorScheme="purple"
      size="lg"
      w="full"
      h="56px"
      isLoading={isLoading}
      loadingText={loadingText}
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
        boxShadow: "0 0 0 3px rgba(159, 122, 234, 0.25)",
      }}
      transition="all 0.2s ease"
      mt={4}
      {...props}
    >
      {children}
    </Button>
  );
}
