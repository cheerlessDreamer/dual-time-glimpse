import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
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
  const [is24Hour, setIs24Hour] = useState(true);
  const [showColon, setShowColon] = useState(true);
  
  // Update colon visibility based on even/odd seconds
  useEffect(() => {
    setShowColon(time.seconds % 2 === 0);
  }, [time.seconds]);

  // Convert hours for 12-hour format if needed
  const displayHours = !is24Hour && totalHours === 24 
    ? time.hours % 12 || 12 
    : time.hours;

  // Format the digital time
  const formattedHours = displayHours.toString().padStart(2, '0');
  const formattedMinutes = time.minutes.toString().padStart(2, '0');

  // Only show the toggle for the standard time clock
  const showToggle = totalHours === 24;

  return (
    <Card className="p-8 flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg min-h-[360px]">
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
          <div className="text-base text-gray-600 dark:text-gray-300 font-mono">
            {formattedHours}
            <span className={showColon ? "opacity-100" : "opacity-0"}>:</span>
            {formattedMinutes}
          </div>
        </div>
      </div>
      {showToggle && (
        <div className="flex items-center space-x-2 mt-4">
          <Switch
            id="clock-format"
            checked={is24Hour}
            onCheckedChange={setIs24Hour}
          />
          <Label htmlFor="clock-format">
            {is24Hour ? "24-hour" : "12-hour"} format
          </Label>
        </div>
      )}
    </Card>
  );
};

export default Clock;