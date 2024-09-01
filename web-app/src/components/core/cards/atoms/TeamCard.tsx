"use client";

import { FC } from "react";
import {
  Box,
  Flex,
  SectionSubheader,
  LongParagraph,
  SmallText,
} from "@/components/core/ui";
import { IoPerson } from "react-icons/io5";
import useModal from "@/hooks/useModal";
import { VerticalCenteredModal } from "@/components/core/modals";
import FullTeamCard from "./FullTeamCard";

interface TeamCardProps {
  boardMemberName: string;
  role: string;
  caption: string | undefined;
  email: string | undefined;
}

const TeamCard: FC<TeamCardProps> = ({
  boardMemberName,
  role,
  caption,
  email,
}) => {
  const { showModal, modalRef, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <div className="hover-animation hover-up " onClick={handleOpenModal}>
        <Box containerClassName="items-center rounded-lg shadow sm:flex">
          <Flex containerClassName="w-full sm:w-1/3 flex-center p-5">
            <IoPerson className="w-24 h-24 text-gray-300" />
          </Flex>
          <Box containerClassName="p-5 sm:w-2/3 space-y-2">
            <SectionSubheader text={boardMemberName} />
            <LongParagraph>{role}</LongParagraph>
            <LongParagraph>{caption}</LongParagraph>
            <SmallText containerClassName="text-purple-500">
              Email: {email}
            </SmallText>
          </Box>
        </Box>
      </div>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          header={boardMemberName}
          onClick={handleCloseModal}
          containerClassName={"resize-modal-full-width"}
        >
          <FullTeamCard />
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default TeamCard;
