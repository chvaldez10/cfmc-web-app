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
  const slideFadeProps = {
    in: true,
    offsetX: "0px",
    offsetY: "-50px",
    transition: { enter: { duration: 0.4 } },
  };

  return (
    <SlideFade {...slideFadeProps} offsetX="-50px" offsetY="0px">
      <VStack
        spacing={{ base: 2, md: 4 }}
        align="start"
        maxW={{ base: "full", md: "lg" }}
        mx="auto"
        borderLeft="solid"
        borderLeftColor="purple.600"
        borderLeftWidth={{ base: "0px", md: "4px" }}
        pl={{ base: 0, md: 4 }}
        py={4}
      >
        {/* Super script Header*/}
        <SlideFade
          {...slideFadeProps}
          transition={{ enter: { duration: 0.4, delay: 0.4 } }}
        >
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
        </SlideFade>
        <SlideFade
          {...slideFadeProps}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="purple.400">
            {MissionStatement.label}
          </Heading>
        </SlideFade>
        <SlideFade
          {...slideFadeProps}
          transition={{ enter: { duration: 0.4, delay: 1.2 } }}
        >
          <Text fontSize={{ base: "sm", md: "md" }}>
            {MissionStatement.statement}
          </Text>
        </SlideFade>
        <SlideFade
          {...slideFadeProps}
          transition={{ enter: { duration: 0.4, delay: 1.6 } }}
        >
          <Button
            colorScheme="purple"
            rightIcon={<FaArrowRight />}
            variant="solid"
            size={{ base: "sm", md: "md" }}
          >
            {ModalButtonLabels.ANNOUNCEMENTS}
          </Button>
        </SlideFade>
      </VStack>
    </SlideFade>
  );
};

const WorshipCountdown = () => {
  return (
    <VStack>
      <Text>Worship Countdown</Text>
      <CountDownTimer />
    </VStack>
  );
};
