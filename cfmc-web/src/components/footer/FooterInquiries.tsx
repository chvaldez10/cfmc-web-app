"use client";

import React, { useState } from "react";
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { FOOTER_INQUIRIES } from "@/constants/publicFooter";
import { ThreeByOneGrid } from "@/components/hero";
import InquiryCard from "@/components/cards/InquiryCard";

const FooterInquiries: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<{
    label: string;
    description: string;
  } | null>(null);

  const handleOpenModal = (inquiry: { label: string; description: string }) => {
    setSelectedInquiry(inquiry);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedInquiry(null);
  };

  return (
    <>
      <ThreeByOneGrid>
        <InquiryCard
          label={FOOTER_INQUIRIES[0].label}
          description={FOOTER_INQUIRIES[0].description}
          onClick={() => handleOpenModal(FOOTER_INQUIRIES[0])}
        />
        <InquiryCard
          label={FOOTER_INQUIRIES[1].label}
          description={FOOTER_INQUIRIES[1].description}
          onClick={() => handleOpenModal(FOOTER_INQUIRIES[1])}
        />
        <InquiryCard
          label={FOOTER_INQUIRIES[2].label}
          description={FOOTER_INQUIRIES[2].description}
          onClick={() => handleOpenModal(FOOTER_INQUIRIES[2])}
        />
      </ThreeByOneGrid>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedInquiry?.label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{selectedInquiry?.description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FooterInquiries;
