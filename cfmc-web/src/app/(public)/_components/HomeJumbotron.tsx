// Inspiration from: https://codepen.io/khone-vongsouthi/full/NbLqeo

import {
  Flex,
  Button,
  Heading,
  Text,
  VStack,
  Divider,
  SlideFade,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import TwoByOneGrid from "@/components/hero/layouts/TwoByOneGrid";
import { Branding, ModalButtonLabels } from "@/constants/shared/enums";
import { MissionStatement } from "@/constants/shared/worship";
import CountDownTimer from "./CountDownTimer";

const HomeJumbotron = () => {
  return (
    <TwoByOneGrid>
      <HomeJumboDetails />
      <WorshipCountdown />
    </TwoByOneGrid>
  );
};

export default HomeJumbotron;

const HomeJumboDetails = () => {
  return (
    <SlideFadeText delay={0}>
      <VStack
        spacing={{ base: 2, md: 4 }}
        align="start"
        maxW={{ base: "full", md: "lg" }}
        borderLeft="solid"
        borderLeftColor="purple.600"
        borderLeftWidth={{ base: "0px", md: "4px" }}
        pl={{ base: 0, md: 4 }}
        py={4}
      >
        {/* Super script Header*/}
        <SlideFadeText delay={0.4}>
          <Flex alignItems="center" gap={2}>
            <Divider
              orientation="horizontal"
              borderColor="purple.500"
              borderWidth="2px"
              width="12px"
            />
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="bold"
              color="gray.600"
            >
              {Branding.CHURCH_NAME}
            </Text>
          </Flex>
        </SlideFadeText>
        {/* Our Mission Header */}
        <SlideFadeText delay={0.8}>
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="purple.400">
            {MissionStatement.OUR_MISSION}
          </Heading>
        </SlideFadeText>
        {/* Mission Statement */}
        <SlideFadeText delay={1.2}>
          <Text fontSize={{ base: "sm", md: "md" }}>
            {MissionStatement.MISSION_STATEMENT}
          </Text>
        </SlideFadeText>
        {/* Announcements Button */}
        <SlideFadeText delay={1.6}>
          <Button
            colorScheme="purple"
            rightIcon={<FaArrowRight />}
            variant="solid"
            size={{ base: "sm", md: "md" }}
          >
            {ModalButtonLabels.ANNOUNCEMENTS}
          </Button>
        </SlideFadeText>
      </VStack>
    </SlideFadeText>
  );
};

const WorshipCountdown = () => {
  const mockDate = new Date(Date.UTC(2025, 1, 23, 21, 0, 0));

  return (
    <VStack>
      <Text>Worship Countdown</Text>
      <CountDownTimer worshipStartDateTime={mockDate} />
    </VStack>
  );
};

const SlideFadeText = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const slideFadeProps = {
    in: true,
    offsetX: "0px",
    offsetY: "-50px",
    transition: { enter: { duration: 0.4, delay } },
  };

  return (
    <SlideFade {...slideFadeProps} offsetX="-50px" offsetY="0px">
      {children}
    </SlideFade>
  );
};
