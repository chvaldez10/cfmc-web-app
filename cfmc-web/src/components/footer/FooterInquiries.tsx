"use client";

import React, { useState } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { FOOTER_INQUIRIES } from "@/constants/publicFooter";
import { ThreeByOneGrid } from "@/components/hero";
import { InquiryCard } from "@/components/ui/cards";
import { BaseModal } from "@/components/ui/modals";
import { InquiryForm } from "@/components/forms";
import {
  ConnectWithUsOptions,
  ContactUsOptions,
  MediaRequestOptions,
} from "@/constants/shared/enums";
import { InquiryType } from "@/types/ui/components";
import { Inquiries } from "@/constants/shared/enums";

const getPreSelectedSubject = (type: InquiryType): string[] => {
  switch (type) {
    case Inquiries.CONNECT:
      return [ConnectWithUsOptions.CONNECT_WITH_US];
    case Inquiries.PRAYER:
      return [ContactUsOptions.REQUEST_PRAYER_SUPPORT];
    case Inquiries.MEDIA:
      return [MediaRequestOptions.GENERAL_MEDIA_REQUEST];
    default:
      return [];
  }
};

const FooterInquiries: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedInquiry, setSelectedInquiry] = useState<{
    label: string;
    description: string;
    type: InquiryType;
  } | null>(null);

  const handleOpenModal = (
    inquiry: { label: string; description: string },
    type: InquiryType
  ) => {
    setSelectedInquiry({ ...inquiry, type });
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
          onClick={() =>
            handleOpenModal(FOOTER_INQUIRIES[0], Inquiries.CONNECT)
          }
        />
        <InquiryCard
          label={FOOTER_INQUIRIES[1].label}
          description={FOOTER_INQUIRIES[1].description}
          icon={FOOTER_INQUIRIES[1].icon}
          onClick={() => handleOpenModal(FOOTER_INQUIRIES[1], Inquiries.PRAYER)}
        />
        <InquiryCard
          label={FOOTER_INQUIRIES[2].label}
          description={FOOTER_INQUIRIES[2].description}
          icon={FOOTER_INQUIRIES[2].icon}
          onClick={() => handleOpenModal(FOOTER_INQUIRIES[2], Inquiries.MEDIA)}
        />
      </ThreeByOneGrid>

      <BaseModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={selectedInquiry?.label || ""}
        size={{ base: "full", sm: "md", md: "lg", lg: "xl" }}
      >
        <VStack spacing={4} align="stretch">
          <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
            {selectedInquiry?.description}
          </Text>

          {selectedInquiry && (
            <InquiryForm
              preSelectedSubject={getPreSelectedSubject(selectedInquiry.type)}
              onSubmitSuccess={handleCloseModal}
            />
          )}
        </VStack>
      </BaseModal>
    </>
  );
};

export default FooterInquiries;
