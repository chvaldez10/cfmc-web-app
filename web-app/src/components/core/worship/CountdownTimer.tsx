"use client";

// original code from https://github.com/timeToCode-ali/react_playground/tree/main/src/components/countdown

import { useState, useEffect, FC } from "react";
import { Box } from "@/components/core/ui";
import { getTimeLeft } from "@/utils/common/dateUtils";
import "@/styles/countdown-timer.css";

interface CountdownTimerProps {
  worshipStartDateTime: Date | undefined;
}

const Countdown: FC<CountdownTimerProps> = ({ worshipStartDateTime }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(worshipStartDateTime as Date)
  );

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(worshipStartDateTime as Date));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [worshipStartDateTime]);

  if (!mounted) {
    return null;
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
