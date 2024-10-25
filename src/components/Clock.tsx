import { Card } from "@/components/ui/card";
import AnalogClock from "./AnalogClock";

interface ClockProps {
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  label: string;
  totalHours: number;
}

const Clock = ({ time, label, totalHours }: ClockProps) => {
  return (
    <Card className="p-8 flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-lg">
      <AnalogClock
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
        totalHours={totalHours}
      />
      <div className="text-lg text-gray-500 dark:text-gray-400 font-medium mt-4">
        {label}
      </div>
    </Card>
  );
};

export default Clock;