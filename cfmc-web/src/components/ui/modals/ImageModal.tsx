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
  const modalSize = useBreakpointValue({ base: "full", md: "4xl" }) as
    | "full"
    | "4xl";

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
        minH={{ base: "calc(100vh - 120px)", md: "50vh" }}
        w="full"
        p={{ base: 2, md: 4 }}
        mt={{ base: 4, md: 2 }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          maxW="100%"
          maxH={{ base: "calc(100vh - 140px)", md: "50vh" }}
          objectFit="contain"
          borderRadius={{ base: "md", md: "lg" }}
          boxShadow={{ base: "sm", md: "2xl" }}
        />
      </Box>
    </BaseModal>
  );
};

export default ImageModal;
