import { useEffect, useState } from "react";
import Clock from "@/components/Clock";
import { getDecimalTime } from "@/lib/timeUtils";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [decimalCurrentTime, setDecimalCurrentTime] = useState(new Date());

  useEffect(() => {
    const standardTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const decimalTimer = setInterval(() => {
      setDecimalCurrentTime(new Date());
    }, 86.4);

    return () => {
      clearInterval(standardTimer);
      clearInterval(decimalTimer);
    };
  }, []);

  const standardTimeObj = {
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes(),
    seconds: currentTime.getSeconds(),
  };

  const decimalTime = getDecimalTime(decimalCurrentTime);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <ThemeToggle />
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-light text-center mb-8 text-gray-800 dark:text-gray-100">
          Standard vs Decimal Time
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Clock time={standardTimeObj} label="Standard Time" totalHours={24} />
          <Clock time={decimalTime} label="Decimal Time" totalHours={10} />
        </div>
        <p className="text-center mt-8 text-sm font-light text-gray-500 dark:text-gray-400">
          The decimal time system divides the day into 10 hours of 100 minutes each
        </p>
      </div>
    </div>
  );
};

export default Index;