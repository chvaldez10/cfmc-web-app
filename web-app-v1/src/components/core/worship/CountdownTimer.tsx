"use client";

// original code from https://github.com/timeToCode-ali/react_playground/tree/main/src/components/countdown

import { useState, useEffect, FC } from "react";
import { Box, SmallText } from "@/components/core/ui";
import { useCountdown } from "@/hooks/useCountdown";
import "@/styles/countdown-timer.css";

interface CountdownTimerProps {
  worshipStartDateTime: Date | undefined;
}

const Countdown: FC<CountdownTimerProps> = ({ worshipStartDateTime }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { timeLeft, isTimeUp } = useCountdown(worshipStartDateTime as Date);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !worshipStartDateTime) {
    return null;
  }

  if (isTimeUp) {
    return (
      <SmallText containerClassName="text-purple-500">
        Worship has started
      </SmallText>
    );
  }

  return (
    <Box containerClassName="countdown">
      <Box containerClassName="content">
        {Object.entries(timeLeft).map((entry) => {
          const label = entry[0];
          const value = entry[1];
          return (
            <Box containerClassName="box" key={label}>
              <Box containerClassName="value">
                <span>{value}</span>
              </Box>
              <span className="label"> {label} </span>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Countdown;
