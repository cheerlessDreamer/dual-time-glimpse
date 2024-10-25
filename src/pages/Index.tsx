import { useEffect, useState } from "react";
import Clock from "@/components/Clock";
import { getDecimalTime } from "@/lib/timeUtils";
import { ThemeToggle } from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Clock time={standardTimeObj} label="Standard Time" totalHours={24} />
          <Clock time={decimalTime} label="Decimal Time" totalHours={10} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;