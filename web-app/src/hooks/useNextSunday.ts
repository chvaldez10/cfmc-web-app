import { useState, useEffect } from "react";
import { getNextSunday, getMonthNameAndDay } from "@/utils/common/dateUtils";

const useNextSunday = () => {
  const [nextSunday, setNextSunday] = useState<string | null>(null);

  useEffect(() => {
    // GIVEN next Sunday date object
    const nextSundayDate = getNextSunday(new Date());

    // WHEN you turn it into string using getMonthNameDay
    // THEN set nextSunday
    setNextSunday(getMonthNameAndDay(nextSundayDate));
  }, []);

  return nextSunday;
};

export default useNextSunday;
