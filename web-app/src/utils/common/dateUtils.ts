export const getNextSunday = (): Date => {
  const now = new Date();
  const nextSunday = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  nextSunday.setUTCDate(
    nextSunday.getUTCDate() + ((7 - nextSunday.getUTCDay()) % 7)
  );
  return nextSunday;
};

export const getTimeLeft = (targetDate: Date) => {
  // Immediately return if no target date is provided
  if (!targetDate) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalTimeLeft = targetDate.getTime() - new Date().getTime();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};
