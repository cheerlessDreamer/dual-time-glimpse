export const getDecimalTime = (date: Date) => {
  const midnight = new Date(date);
  midnight.setHours(0, 0, 0, 0);
  
  const msSinceMidnight = date.getTime() - midnight.getTime();
  const dayProgress = msSinceMidnight / (24 * 60 * 60 * 1000);
  
  const decimalHours = Math.floor(dayProgress * 10);
  const decimalMinutes = Math.floor((dayProgress * 10 * 100) % 100);
  
  return {
    hours: decimalHours,
    minutes: decimalMinutes
  };
};

export const formatDecimalTime = (hours: number, minutes: number): string => {
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};