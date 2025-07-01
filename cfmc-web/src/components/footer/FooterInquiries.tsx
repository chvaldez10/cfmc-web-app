"use client";

import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { FOOTER_INQUIRIES } from "@/constants/publicFooter";
import { ThreeByOneGrid } from "@/components/hero";
import { InquiryCard } from "@/components/ui/cards";
import { BaseModal } from "@/components/ui/modals";

const FooterInquiries: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
          icon={FOOTER_INQUIRIES[0].icon}
          onClick={() => handleOpenModal(FOOTER_INQUIRIES[0])}
        />
        <InquiryCard
          label={FOOTER_INQUIRIES[1].label}
          description={FOOTER_INQUIRIES[1].description}
          icon={FOOTER_INQUIRIES[1].icon}
          onClick={() => handleOpenModal(FOOTER_INQUIRIES[1])}
        />
        <InquiryCard
          label={FOOTER_INQUIRIES[2].label}
          description={FOOTER_INQUIRIES[2].description}
          icon={FOOTER_INQUIRIES[2].icon}
          onClick={() => handleOpenModal(FOOTER_INQUIRIES[2])}
        />
      </ThreeByOneGrid>

      <BaseModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={selectedInquiry?.label || ""}
        footerActions={[
          {
            label: "Close",
            onClick: handleCloseModal,
            colorScheme: "purple",
          },
        ]}
      >
        <Text>{selectedInquiry?.description}</Text>
      </BaseModal>
    </>
  );
};

export default FooterInquiries;
