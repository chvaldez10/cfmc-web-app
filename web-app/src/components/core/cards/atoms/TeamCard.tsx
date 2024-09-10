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
import { ChurchMembers } from "@/types/supabaseTypes";

interface TeamCardProps extends ChurchMembers {}

const TeamCard: FC<TeamCardProps> = ({ ...props }) => {
  const { showModal, modalRef, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <div className="hover-animation hover-up " onClick={handleOpenModal}>
        <Box containerClassName="items-center rounded-lg shadow sm:flex">
          <Flex containerClassName="w-full sm:w-1/3 flex-center p-5">
            <IoPerson className="w-24 h-24 text-gray-300" />
          </Flex>
          <Box containerClassName="p-5 sm:w-2/3 space-y-1">
            <SectionSubheader
              text={`${props.suffix} ${props.firstName} ${props.lastName}`}
            />
            <LongParagraph>{props.role}</LongParagraph>
            <LongParagraph>{props.headline}</LongParagraph>
            <SmallText containerClassName="text-purple-500">
              Email: {props.email}
            </SmallText>
          </Box>
        </Box>
      </div>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          header={`${props.suffix} ${props.firstName} ${props.lastName}`}
          onClick={handleCloseModal}
          containerClassName={"resize-modal-full-width"}
        >
          <FullTeamCard {...props} />
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default TeamCard;
