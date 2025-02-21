/**
 * Calculates the time left until the target date.
 * @param targetDate - The date to count down to.
 * @returns An object containing days, hours, minutes, and seconds left.
 */
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

/**
 * Formats time values into a padded string format.
 * @param days - Number of days.
 * @param hours - Number of hours.
 * @param minutes - Number of minutes.
 * @param seconds - Number of seconds.
 * @returns An object with each time value as a padded string.
 */
export const formatTimeToPaddedString = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return {
    days: days.toString().padStart(2, "0"),
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
};

/**
 * Formats a UTC date string to a human-readable format.
 * This taken from tixr's discovery page.
 * @param utcDateString - The UTC date string to format.
 * @returns The formatted date string.
 */
export function formatLocalDateTimeToHumanReadable(
  utcDateString: string
): string {
  const date = new Date(utcDateString);
  const options: Intl.DateTimeFormatOptions = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = date.toLocaleString("en-US", options);
  const timeZone = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "short",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value;

  return (
    formattedDate.replace(",", " at").replace("AM", "am").replace("PM", "pm") +
    ` ${timeZone}`
  );
}
