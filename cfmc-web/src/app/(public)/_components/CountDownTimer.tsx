"use client";

import { Flex, Text, VStack } from "@chakra-ui/react";
import { CountdownLabels } from "@/constants/shared/enums";
import { useCountdown } from "@/hooks/useCountdown";
import { formatTimeToPaddedString } from "@/utils/dateUtils";

const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <VStack
    bg="gray.500"
    color="white"
    borderRadius="md"
    textAlign="center"
    width={{ base: "5rem", md: "6rem" }}
    height={{ base: "5rem", md: "6rem" }}
    mb={{ base: 2, md: 0 }}
  >
    <Text fontSize={{ base: "2xl", md: "4xl" }} fontFamily="mono">
      {value}
    </Text>
    <Text fontSize={{ base: "xs", md: "sm" }}>{label}</Text>
  </VStack>
);

const CountDownTimer = () => {
  const mockDate = new Date(Date.UTC(2025, 1, 23, 21, 0, 0));
  const { timeLeft, isTimeUp } = useCountdown(mockDate);
  const formattedTime = formatTimeToPaddedString(timeLeft);

  return (
    <Flex
      direction="row"
      gap={{ base: 2, md: 5 }}
      textAlign="center"
      justifyContent="center"
      alignItems="center"
    >
      <TimeBox value={formattedTime.days} label={CountdownLabels.DAYS} />
      <TimeBox value={formattedTime.hours} label={CountdownLabels.HOURS} />
      <TimeBox value={formattedTime.minutes} label={CountdownLabels.MINUTES} />
      <TimeBox value={formattedTime.seconds} label={CountdownLabels.SECONDS} />
    </Flex>
  );
};

export default CountDownTimer;
