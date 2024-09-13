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
