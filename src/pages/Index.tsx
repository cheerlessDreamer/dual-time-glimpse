import { useEffect, useState } from "react";
import { format } from "date-fns";
import Clock from "@/components/Clock";
import { getDecimalTime, formatDecimalTime } from "@/lib/timeUtils";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [decimalCurrentTime, setDecimalCurrentTime] = useState(new Date());

  useEffect(() => {
    // Standard time update every second
    const standardTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Decimal time update every ~86.4ms (1/1000th of a decimal day)
    const decimalTimer = setInterval(() => {
      setDecimalCurrentTime(new Date());
    }, 86.4);

    return () => {
      clearInterval(standardTimer);
      clearInterval(decimalTimer);
    };
  }, []);

  const standardTime = format(currentTime, "HH:mm:ss");
  const decimalTime = getDecimalTime(decimalCurrentTime);
  const formattedDecimalTime = formatDecimalTime(
    decimalTime.hours,
    decimalTime.minutes,
    decimalTime.seconds
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Dual Time Display
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Clock time={standardTime} label="Standard Time" />
          <Clock time={formattedDecimalTime} label="Decimal Time" />
        </div>
        <p className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          The decimal time system divides the day into 10 hours of 100 minutes each
        </p>
      </div>
    </div>
  );
};

export default Index;