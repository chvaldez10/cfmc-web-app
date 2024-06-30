export const getNextSunday = (date: Date): Date => {
  const nextSunday = new Date(date);
  nextSunday.setDate(date.getDate() + ((7 - date.getDay()) % 7));
  return nextSunday;
};

export const getMonthNameAndDay = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
