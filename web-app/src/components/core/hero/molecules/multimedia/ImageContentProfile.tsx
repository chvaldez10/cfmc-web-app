"use client";

import { FC } from "react";
import { IoPerson } from "react-icons/io5";
import {
  Box,
  FlexCenter,
  SectionSubheader,
  LongParagraph,
} from "@/components/core/ui";
import useModal from "@/hooks/useModal";
import { VerticalCenteredModal } from "@/components/core/modals";
import FullTeamCard from "@/components/core/cards/atoms/FullTeamCard";
import { ChurchMembers } from "@/types/supabaseTypes";

// interface ImageContentProfileProps extends ChurchMembers {}

const ImageContentProfile: FC = () => {
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
            text="Phoebe Caulfield"
          />
          <Box containerClassName="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></Box>
          <LongParagraph containerClassName="text-gray-600">
            Raclette knausgaard hella meggs normcore williamsburg enamel pin
            sartorial venmo tbh hot chicken gentrify portland.
          </LongParagraph>
        </FlexCenter>
      </div>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          header="Phoebe Caulfield"
          onClick={handleCloseModal}
          containerClassName={"resize-modal-full-width"}
        >
          <FullTeamCard />
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default ImageContentProfile;
