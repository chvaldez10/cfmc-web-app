"use client";

import React, { useState } from "react";
import {
  Box,
  Text,
  Icon,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { FOOTER_INQUIRIES } from "../../constants/publicFooter";
import { FaStar } from "react-icons/fa"; // Example icon

function InquiryCard({
  label,
  description,
  onClick,
}: {
  label: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <Box
      bg="orange.500"
      p={5}
      borderRadius="md"
      color="white"
      position="relative"
      cursor="pointer"
      onClick={onClick}
    >
      <Icon top={2} right={2} position="absolute">
        <FaStar />
      </Icon>
      <Box mt={8}>
        <Text fontSize="xl" fontWeight="bold">
          {label}
        </Text>
        <Text mt={2}>{description}</Text>
      </Box>
    </Box>
  );
}

function FooterInquiries() {
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
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
        {FOOTER_INQUIRIES.map((inquiry, index) => (
          <InquiryCard
            key={index}
            label={inquiry.label}
            description={inquiry.description}
            onClick={() => handleOpenModal(inquiry)}
          />
        ))}
      </Grid>

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
}

export default FooterInquiries;
