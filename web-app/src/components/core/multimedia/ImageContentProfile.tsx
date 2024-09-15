"use client";

import { FC } from "react";
import { IoPerson } from "react-icons/io5";
import {
  Box,
  FlexCenter,
  SectionSubheader,
  LongParagraph,
  FullProfileCard,
  VerticalCenteredModal,
} from "@/components/core/ui";
import useModal from "@/hooks/useModal";
import { ChurchMembers } from "@/types/supabaseTypes";

interface ImageContentProfileProps extends ChurchMembers {}

const ImageContentProfile: FC<ImageContentProfileProps> = ({
  ...churchMemberData
}) => {
  const { showModal, modalRef, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <div
        className="sm:w-1/3 text-center sm:pr-8 sm:py-8 space-y-4 hover-animation hover-up"
        onClick={handleOpenModal}
      >
        <Box containerClassName="w-20 h-20 rounded-full inline-flex items-center justify-center bg-purple-100 text-purple-500">
          <IoPerson className="w-10 h-10" />
        </Box>
        <FlexCenter containerClassName="text-center ">
          <SectionSubheader
            containerClassName="title-font text-gray-900"
            text={`${churchMemberData.suffix} ${churchMemberData.firstName} ${churchMemberData.lastName}`}
          />
          <Box containerClassName="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></Box>
          <LongParagraph containerClassName="text-gray-600">
            {churchMemberData.bio}
          </LongParagraph>
        </FlexCenter>
      </div>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          header={`${churchMemberData.suffix} ${churchMemberData.firstName} ${churchMemberData.lastName}`}
          onClick={handleCloseModal}
          containerClassName={"resize-modal-medium"}
        >
          <FullProfileCard {...churchMemberData} />
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default ImageContentProfile;
