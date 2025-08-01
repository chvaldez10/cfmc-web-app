import { ComponentType } from "react";

import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  VStack,
  HStack,
  Box,
  Icon,
  Divider,
  useToast,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaMailBulk,
  FaHandshake,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { useState } from "react";

// Types
interface DonationMethod {
  icon: ComponentType<{ size?: string | number; className?: string }>;
  title: string;
  description: string;
  email?: string;
  details?: string;
}

import { PublicLabels } from "@/constants/shared/enums";

interface DonationMethodCardProps {
  method: DonationMethod;
  index: number;
  onCopyEmail: (email: string, index: number) => void;
  copiedIndex: number | null;
}

// Email Copy Section Component
const EmailCopySection = ({
  email,
  index,
  onCopyEmail,
  copiedIndex,
}: {
  email: string;
  index: number;
  onCopyEmail: (email: string, index: number) => void;
  copiedIndex: number | null;
}) => {
  const isCopied = copiedIndex === index;
  return (
    <Tooltip label={email} placement="top" hasArrow>
      <Box
        mt={3}
        p={3}
        bg="white"
        borderRadius="lg"
        border="1px"
        borderColor="gray.300"
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        tabIndex={0}
        onClick={() => onCopyEmail(email, index)}
        _hover={{ bg: "gray.50" }}
        _active={{ bg: "gray.100" }}
        transition="background 0.2s"
        aria-label={`Copy email: ${email}`}
      >
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color={isCopied ? "green.600" : "brand.600"}
          fontWeight="medium"
        >
          {isCopied ? "Copied!" : "Copy email"}
        </Text>
        <Box
          as="span"
          ml={2}
          color={isCopied ? "green.500" : "gray.500"}
          fontSize="lg"
        >
          {isCopied ? <FaCheck /> : <FaCopy />}
        </Box>
      </Box>
    </Tooltip>
  );
};

// Donation Method Card Component
const DonationMethodCard = ({
  method,
  index,
  onCopyEmail,
  copiedIndex,
}: DonationMethodCardProps) => {
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const cardHoverBg = useColorModeValue("gray.100", "gray.600");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      p={5}
      border="2px"
      borderColor={borderColor}
      borderRadius="xl"
      bg={cardBg}
      _hover={{
        bg: cardHoverBg,
        transform: "translateY(-2px)",
        borderColor: "brand.300",
        boxShadow: "lg",
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      position="relative"
      overflow="hidden"
    >
      <HStack spacing={4} align="start">
        <Box
          p={3}
          bg="brand.100"
          borderRadius="full"
          color="brand.600"
          flexShrink={0}
        >
          <Icon as={method.icon} boxSize={{ base: 5, md: 6 }} />
        </Box>

        <VStack align="start" spacing={2} flex={1}>
          <Text
            fontWeight="bold"
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.800"
          >
            {method.title}
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color={textColor}
            lineHeight="tall"
          >
            {method.description}
          </Text>

          {/* Email section with copy functionality */}
          {method.email && (
            <EmailCopySection
              email={method.email}
              index={index}
              onCopyEmail={onCopyEmail}
              copiedIndex={copiedIndex}
            />
          )}

          {/* Additional details */}
          {method.details && (
            <Box
              mt={2}
              p={3}
              bg="gray.100"
              borderRadius="md"
              border="1px"
              borderColor="gray.200"
            >
              <Text fontSize="sm" color="gray.700" fontWeight="medium">
                {method.details}
              </Text>
            </Box>
          )}
        </VStack>
      </HStack>
    </Box>
  );
};

// Info Section Component
const InfoSection = () => {
  const infoBg = useColorModeValue("blue.50", "blue.900");
  const infoBorder = useColorModeValue("blue.200", "blue.700");

  return (
    <Box
      p={5}
      bg={infoBg}
      borderRadius="xl"
      border="2px"
      borderColor={infoBorder}
      textAlign="center"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="2px"
        bg="linear-gradient(90deg, #3182ce, #805ad5, #3182ce)"
        backgroundSize="200% 100%"
        animation="gradient 3s ease infinite"
      />
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="blue.800"
        fontWeight="semibold"
        lineHeight="tall"
      >
        💝 Your generous contributions help us continue God&apos;s work in our
        community and beyond. Thank you for your support!
      </Text>
    </Box>
  );
};

// Introduction Section Component
const IntroductionSection = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box textAlign="center">
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color={textColor}
        lineHeight="tall"
        fontWeight="medium"
      >
        Support God&apos;s mission through CFMC with your generous contributions
      </Text>
      <Text fontSize="sm" color="gray.500" mt={2}>
        Choose from multiple convenient donation methods
      </Text>
    </Box>
  );
};

// Main Modal Component
const TithesAndOfferingsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const toast = useToast();

  // Color mode values for better theming
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const handleCopyEmail = (email: string, index: number) => {
    navigator.clipboard.writeText(email);
    setCopiedIndex(index);

    toast({
      title: "Email copied!",
      description: "The e-transfer email has been copied to your clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });

    // Reset copied state after 2 seconds
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const donationMethods: DonationMethod[] = [
    {
      icon: FaEnvelope,
      title: "E-Transfer",
      description: "Send directly to our church email",
      email: "calgaryfilipinomethodistchurch@yahoo.com",
    },
    {
      icon: FaMailBulk,
      title: "Mail",
      description: "Send checks or money orders by mail",
      details: "Address: 123 Church Street, Calgary, AB",
    },
    {
      icon: FaHandshake,
      title: "In-Person",
      description: "Give during Sunday Worship Service",
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={{ base: "sm", md: "md", lg: "lg" }}
      scrollBehavior="inside"
    >
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
      <ModalContent
        mx={4}
        bg={bgColor}
        borderRadius="xl"
        boxShadow="2xl"
        maxH="90vh"
      >
        <ModalHeader
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign="center"
          fontWeight="bold"
          color="brand.600"
          pb={2}
        >
          {PublicLabels.TITHE_AND_OFFERINGS}
        </ModalHeader>
        <ModalCloseButton
          size="lg"
          borderRadius="full"
          bg="gray.100"
          _hover={{ bg: "gray.200" }}
        />
        <ModalBody pb={6} px={6}>
          <VStack spacing={6} align="stretch">
            <IntroductionSection />
            <Divider borderColor={borderColor} />

            {/* Donation Methods */}
            <VStack spacing={4} align="stretch">
              {donationMethods.map((method, index) => (
                <DonationMethodCard
                  key={index}
                  method={method}
                  index={index}
                  onCopyEmail={handleCopyEmail}
                  copiedIndex={copiedIndex}
                />
              ))}
            </VStack>

            <InfoSection />
          </VStack>
        </ModalBody>
        <ModalFooter pt={2} pb={6} px={6}>
          <Button
            bg="brand.500"
            color="white"
            onClick={onClose}
            _hover={{ bg: "brand.400", transform: "translateY(-1px)" }}
            _active={{ bg: "brand.600" }}
            size={{ base: "md", md: "lg" }}
            w={{ base: "full", md: "auto" }}
            px={8}
            borderRadius="lg"
            fontWeight="semibold"
            transition="all 0.2s"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </Modal>
  );
};

export default TithesAndOfferingsModal;
