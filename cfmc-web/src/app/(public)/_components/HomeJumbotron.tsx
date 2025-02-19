import { Flex, Button, Heading, Text, VStack, Divider } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import TwoByOneGrid from "@/components/hero/layouts/TwoByOneGrid";
import { Branding, ModalButtonLabels } from "@/constants/shared/enums";
import { MissionStatement } from "@/constants/shared/worship";

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
      <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="purple.400">
        {MissionStatement.label}
      </Heading>
      <Text fontSize={{ base: "sm", md: "md" }}>
        {MissionStatement.statement}
      </Text>
      <Button
        colorScheme="purple"
        rightIcon={<FaArrowRight />}
        variant="solid"
        size={{ base: "sm", md: "md" }}
      >
        {ModalButtonLabels.ANNOUNCEMENTS}
      </Button>
    </VStack>
  );
};

const WorshipCountdown = () => {
  return (
    <VStack>
      <Text>Worship Countdown</Text>
    </VStack>
  );
};
