import { useEffect, useState } from "react";
import { getTimeLeft } from "@/utils/common/dateUtils";

export const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (!targetDate) {
      return;
    }

    const updateCountdown = () => {
      const newTimeLeft = getTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      const isUp = Object.values(newTimeLeft).every((value) => value <= 0);
      setIsTimeUp(isUp);
    };

    const timer = setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return { timeLeft, isTimeUp };
};
