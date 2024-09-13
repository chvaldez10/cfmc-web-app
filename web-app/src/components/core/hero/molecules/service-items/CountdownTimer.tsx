"use client";

// original code from https://github.com/timeToCode-ali/react_playground/tree/main/src/components/countdown

import { useState, useEffect, FC } from "react";
import { Box } from "@/components/core/ui";
import { getTimeLeft } from "@/utils/common/dateUtils";
import "@/styles/countdown-timer.css";

const TEST_DATE = new Date("2024-09-15T00:00:00");

const Countdown: FC = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(TEST_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(TEST_DATE));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
