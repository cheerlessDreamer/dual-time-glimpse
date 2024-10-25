export const getDecimalTime = (date: Date) => {
  const midnight = new Date(date);
  midnight.setHours(0, 0, 0, 0);
  
  const msSinceMidnight = date.getTime() - midnight.getTime();
  const dayProgress = msSinceMidnight / (24 * 60 * 60 * 1000);
  
  const totalDecimalSeconds = Math.floor(dayProgress * 10 * 100 * 100);
  
  const decimalHours = Math.floor(totalDecimalSeconds / (100 * 100));
  const decimalMinutes = Math.floor((totalDecimalSeconds % (100 * 100)) / 100);
  const decimalSeconds = totalDecimalSeconds % 100;
  
  return {
    hours: decimalHours,
    minutes: decimalMinutes,
    seconds: decimalSeconds
  };
};

export const formatDecimalTime = (hours: number, minutes: number, seconds: number): string => {
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};