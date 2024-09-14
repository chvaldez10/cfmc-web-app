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

const TeamCard: FC<TeamCardProps> = ({ ...churchMemberData }) => {
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
              text={`${churchMemberData.suffix} ${churchMemberData.firstName} ${churchMemberData.lastName}`}
            />
            <LongParagraph>{churchMemberData.role}</LongParagraph>
            <LongParagraph>{churchMemberData.headline}</LongParagraph>
            <SmallText containerClassName="text-purple-500">
              Email: {churchMemberData.email}
            </SmallText>
            <SmallText containerClassName="text-purple-500">
              Phone: {churchMemberData.phoneNumber || "N/A"}
            </SmallText>
          </Box>
        </Box>
      </div>
      {showModal && (
        <VerticalCenteredModal
          ref={modalRef}
          header={`${churchMemberData.suffix} ${churchMemberData.firstName} ${churchMemberData.lastName}`}
          onClick={handleCloseModal}
          containerClassName={"resize-modal-medium"}
        >
          <FullTeamCard {...churchMemberData} />
        </VerticalCenteredModal>
      )}
    </>
  );
};

export default TeamCard;
