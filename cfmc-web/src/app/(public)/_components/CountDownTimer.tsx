"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { CountdownLabels } from "@/constants/shared/enums";
import { useCountdown } from "@/hooks/useCountdown";
import { formatTimeToPaddedString } from "@/utils/dateUtils";

const CountDownTimer = () => {
  const mockDate = new Date(Date.UTC(2025, 1, 23, 21, 0, 0));
  const { timeLeft, isTimeUp } = useCountdown(mockDate);
  const formattedTime = formatTimeToPaddedString(timeLeft);

  return (
    <Flex
      direction="row"
      gap={5}
      textAlign="center"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p={2}
        bg="gray.700"
        color="white"
        borderRadius="md"
        textAlign="center"
      >
        <Text fontSize="5xl" fontFamily="mono">
          {formattedTime.days}
        </Text>
        <Text>{CountdownLabels.DAYS}</Text>
      </Box>
      <Box
        p={2}
        bg="gray.700"
        color="white"
        borderRadius="md"
        textAlign="center"
      >
        <Text fontSize="5xl" fontFamily="mono">
          {formattedTime.hours}
        </Text>
        <Text>{CountdownLabels.HOURS}</Text>
      </Box>
      <Box
        p={2}
        bg="gray.700"
        color="white"
        borderRadius="md"
        textAlign="center"
      >
        <Text fontSize="5xl" fontFamily="mono">
          {formattedTime.minutes}
        </Text>
        <Text>{CountdownLabels.MINUTES}</Text>
      </Box>
      <Box
        p={2}
        bg="gray.700"
        color="white"
        borderRadius="md"
        textAlign="center"
      >
        <Text fontSize="5xl" fontFamily="mono">
          {formattedTime.seconds}
        </Text>
        <Text>{CountdownLabels.SECONDS}</Text>
      </Box>
    </Flex>
  );
};

export default CountDownTimer;
