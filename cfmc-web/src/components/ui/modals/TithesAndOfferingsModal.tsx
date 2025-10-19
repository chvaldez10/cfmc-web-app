import {
  Button,
  Text,
  VStack,
  HStack,
  Box,
  Icon,
  Separator,
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogCloseTrigger,
  DialogBody,
  DialogFooter,
  DialogBackdrop,
  DialogPositioner,
} from "@chakra-ui/react";
import { FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import { Tooltip } from "@/components/ui/tooltip";

// Types
import { DonationMethod } from "@/types/ui/components";

import { PublicLabels } from "@/constants/shared/enums";
import { TITHERS_AND_OFFERINGS_MODAL } from "@/constants/publicNavbar";
import { DONATION_METHODS } from "@/constants/shared/contact";

interface DonationMethodCardProps {
  method: DonationMethod;
  index: number;
  onCopyItem: (item: string, index: number) => void;
  copiedIndex: number | null;
}

// Copy Item Section Component
const CopyItemSection = ({
  item,
  index,
  onCopyItem,
  copiedIndex,
}: {
  item: string;
  index: number;
  onCopyItem: (item: string, index: number) => void;
  copiedIndex: number | null;
}) => {
  const isCopied = copiedIndex === index;
  return (
    <Tooltip content={item} showArrow positioning={{ placement: "top" }}>
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
        onClick={() => onCopyItem(item, index)}
        _hover={{ bg: "gray.50" }}
        _active={{ bg: "gray.100" }}
        transition="background 0.2s"
        aria-label={`Copy: ${item}`}
      >
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color={isCopied ? "green.600" : "brand.600"}
          fontWeight="medium"
        >
          {isCopied ? "Copied!" : "Copy to clipboard"}
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
  onCopyItem,
  copiedIndex,
}: DonationMethodCardProps) => {
  const cardBg = "gray.50";
  const cardHoverBg = "gray.100";
  const borderColor = "gray.200";
  const textColor = "gray.600";

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
      <HStack gap={4} align="start">
        <Box
          p={3}
          bg="brand.100"
          borderRadius="full"
          color="brand.600"
          flexShrink={0}
        >
          <Icon as={method.icon} boxSize={{ base: 5, md: 6 }} />
        </Box>

        <VStack align="start" gap={2} flex={1}>
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

          {/* Copy item section with copy functionality */}
          {method.onCopyItem && (
            <CopyItemSection
              item={method.onCopyItem}
              index={index}
              onCopyItem={onCopyItem}
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
  const infoBg = "blue.50";
  const infoBorder = "blue.200";

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
        {TITHERS_AND_OFFERINGS_MODAL.message}
      </Text>
    </Box>
  );
};

// Introduction Section Component
const IntroductionSection = () => {
  const textColor = "gray.600";

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

  // Color values for theming
  const bgColor = "white";
  const borderColor = "gray.200";

  const handleCopyItem = (item: string, index: number) => {
    navigator.clipboard.writeText(item);
    setCopiedIndex(index);

    toaster.create({
      title: "Copied!",
      description: "The information has been copied to your clipboard.",
      type: "success",
      duration: 2000,
    });

    // Reset copied state after 2 seconds
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(e) => !e.open && onClose()}
      placement="center"
      size={{ base: "sm", md: "md", lg: "lg" }}
      scrollBehavior="inside"
    >
      <DialogBackdrop bg="blackAlpha.600" backdropFilter="blur(4px)" />
      <DialogPositioner>
        <DialogContent
          mx={4}
          bg={bgColor}
          borderRadius="xl"
          boxShadow="2xl"
          maxH="90vh"
          data-testid="tithes-and-offerings-modal-content"
        >
          <DialogHeader textAlign="center" pb={2}>
            <DialogTitle
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="brand.600"
            >
              {PublicLabels.TITHES_AND_OFFERINGS}
            </DialogTitle>
          </DialogHeader>
          <DialogCloseTrigger
            borderRadius="full"
            bg="gray.100"
            _hover={{ bg: "gray.200" }}
          />
          <DialogBody pb={6} px={6}>
            <VStack gap={6} align="stretch">
              <IntroductionSection />
              <Separator borderColor={borderColor} />

              {/* Donation Methods */}
              <VStack gap={4} align="stretch">
                {DONATION_METHODS.map((method, index) => (
                  <DonationMethodCard
                    key={index}
                    method={method}
                    index={index}
                    onCopyItem={handleCopyItem}
                    copiedIndex={copiedIndex}
                  />
                ))}
              </VStack>

              <InfoSection />
            </VStack>
          </DialogBody>
          <DialogFooter pt={2} pb={6} px={6}>
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
          </DialogFooter>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};

export default TithesAndOfferingsModal;
