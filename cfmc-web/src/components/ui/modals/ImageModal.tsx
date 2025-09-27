import React from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
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
  const modalSize = useBreakpointValue({ base: "full", md: "6xl" }) as
    | "full"
    | "6xl";

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Gallery Image"
      size={modalSize}
      closeOnOverlayClick={true}
      closeOnEsc={true}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH={{ base: "80vh", md: "70vh" }}
        w="full"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          maxW="100%"
          maxH={{ base: "75vh", md: "65vh" }}
          objectFit="contain"
          borderRadius="lg"
          boxShadow="2xl"
        />
      </Box>
    </BaseModal>
  );
};

export default ImageModal;
