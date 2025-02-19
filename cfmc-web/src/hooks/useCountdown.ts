import { useEffect, useState } from "react";
import { getTimeLeft } from "@/utils/dateUtils";
import { initialCountdownValues } from "@/constants/shared/date";

export const useCountdown = (targetDate: Date) => {
  const [countdown, setCountdown] = useState({
    timeLeft: initialCountdownValues,
    isTimeUp: false,
  });

  useEffect(() => {
    if (
      !targetDate ||
      !(targetDate instanceof Date) ||
      isNaN(targetDate.getTime())
    ) {
      console.warn("Invalid target date provided.");
      return;
    }

    const updateCountdown = () => {
      const newTimeLeft = getTimeLeft(targetDate);
      const isUp = Object.values(newTimeLeft).every((value) => value <= 0);
      setCountdown({ timeLeft: newTimeLeft, isTimeUp: isUp });
    };

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return countdown;
};
