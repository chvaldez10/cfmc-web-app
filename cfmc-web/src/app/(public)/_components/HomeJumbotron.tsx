import { Flex, Button, Heading, Text, VStack, Divider } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import TwoByOneGrid from "@/components/hero/layouts/TwoByOneGrid";
import { Branding, ModalButtonLabels } from "@/constants/shared/enums";
import { MissionStatement } from "@/constants/shared/worship";

const HomeJumbotron = () => {
  return (
    <TwoByOneGrid>
      {/* Left side */}
      <VStack
        spacing={2}
        align="start"
        maxW="lg"
        mx="auto"
        borderLeft="4px"
        borderColor="purple.600"
        pl={4}
        py={4}
      >
        {/* Super script */}
        <Flex alignItems="center">
          <Divider
            orientation="horizontal"
            borderColor="purple.500"
            borderWidth="2px"
            width="24px"
          />
          <Text fontSize="sm" fontWeight="bold" color="gray.900" pl={4}>
            {Branding.CHURCH_NAME}
          </Text>
        </Flex>
        <Heading as="h1" size="2xl" color="purple.400">
          {MissionStatement.label}
        </Heading>
        <Text>{MissionStatement.statement}</Text>
        <Button
          colorScheme="purple"
          rightIcon={<FaArrowRight />}
          variant="solid"
        >
          {ModalButtonLabels.LEARN_MORE}
        </Button>
      </VStack>

      <Text>Right side</Text>
    </TwoByOneGrid>
  );
};

export default HomeJumbotron;
