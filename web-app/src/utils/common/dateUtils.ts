export const getNextSunday = (): Date => {
  const now = new Date();
  const nextSunday = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  console.log(nextSunday);
  nextSunday.setUTCDate(
    nextSunday.getUTCDate() + ((7 - nextSunday.getUTCDay()) % 7)
  );
  return nextSunday;
};

export const getMonthNameAndDay = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
