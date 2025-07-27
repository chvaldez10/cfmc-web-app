import React from "react";
import { Box, Image, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import BaseModal from "./BaseModal";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}) => {
  const modalSize = useBreakpointValue({ base: "full", md: "4xl" }) as
    | "full"
    | "4xl";

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size={modalSize}
      hideCloseButton={true}
      closeOnOverlayClick={true}
      closeOnEsc={true}
      renderHeader={() => (
        <Box position="absolute" top={4} right={4} zIndex={10}>
          <IconButton
            aria-label="Close"
            icon={<CloseIcon />}
            onClick={onClose}
            variant="solid"
            colorScheme="blackAlpha"
            bg="rgba(0, 0, 0, 0.6)"
            color="white"
            size="sm"
            borderRadius="full"
            _hover={{
              bg: "rgba(0, 0, 0, 0.8)",
            }}
          />
        </Box>
      )}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH={{ base: "100vh", md: "70vh" }}
        w="full"
        p={{ base: 0, md: 4 }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          maxW="100%"
          maxH={{ base: "100vh", md: "70vh" }}
          objectFit="contain"
          borderRadius={{ base: 0, md: "lg" }}
          boxShadow={{ base: "none", md: "2xl" }}
        />
      </Box>
    </BaseModal>
  );
};

export default ImageModal;
