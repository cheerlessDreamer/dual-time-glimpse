import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import AnalogClock from "./AnalogClock";
import { useState, useEffect } from "react";

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
  const [is24Hour, setIs24Hour] = useState(false);
  const [showColon, setShowColon] = useState(true);
  
  useEffect(() => {
    setShowColon(time.seconds % 2 === 0);
  }, [time.seconds]);

  const displayHours = !is24Hour && totalHours === 24 
    ? time.hours % 12 || 12 
    : time.hours;

  const formattedHours = displayHours.toString().padStart(2, '0');
  const formattedMinutes = time.minutes.toString().padStart(2, '0');
  const formattedSeconds = time.seconds.toString().padStart(2, '0');

  const showToggle = totalHours === 24;

  return (
    <Card className="p-8 flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg min-h-[360px] relative">
      {totalHours === 10 && (
        <div className="absolute top-4 right-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-[250px] text-sm">
              Decimal time divides the day into 10 hours, each hour into 100 minutes, and each minute into 100 seconds. This system was briefly used during the French Revolution.
            </TooltipContent>
          </Tooltip>
        </div>
      )}
      <div className="flex-1 flex flex-col items-center pt-4">
        <AnalogClock
          hours={displayHours}
          minutes={time.minutes}
          seconds={time.seconds}
          totalHours={!is24Hour && totalHours === 24 ? 12 : totalHours}
        />
        <div className="flex flex-col items-center gap-1">
          <div className="text-lg text-gray-500 dark:text-gray-400 font-medium mt-4">
            {label}
          </div>
          <div className="text-2xl text-gray-600 dark:text-gray-300 font-mono tracking-wider">
            <span>{formattedHours}</span>
            <span className={`text-gray-400 dark:text-gray-500 ${showColon ? "opacity-100" : "opacity-0"}`}>:</span>
            <span>{formattedMinutes}</span>
            <span className={`text-gray-400 dark:text-gray-500 ${showColon ? "opacity-100" : "opacity-0"}`}>:</span>
            <span>{formattedSeconds}</span>
          </div>
        </div>
      </div>
      {showToggle && (
        <div className="flex items-center space-x-3 mt-4 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <Switch
            id="clock-format"
            checked={is24Hour}
            onCheckedChange={setIs24Hour}
            className="data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-gray-600"
          />
          <Label htmlFor="clock-format" className="text-sm font-medium cursor-pointer select-none">
            {is24Hour ? "24-hour" : "12-hour"} format
          </Label>
        </div>
      )}
    </Card>
  );
};

export default Clock;