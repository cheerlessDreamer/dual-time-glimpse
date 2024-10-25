import { cn } from "@/lib/utils";

interface AnalogClockProps {
  hours: number;
  minutes: number;
  seconds: number;
  totalHours: number;
}

const AnalogClock = ({ hours, minutes, seconds, totalHours }: AnalogClockProps) => {
  // Convert time to degrees for rotation
  const hourDegrees = (hours / totalHours) * 360 + (minutes / (60 * totalHours)) * 360;
  const minuteDegrees = (minutes / 60) * 360;
  const secondDegrees = (seconds / 60) * 360;

  return (
    <div className="relative w-48 h-48">
      {/* Outer frame */}
      <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700" />
      
      {/* Clock face */}
      <div className="absolute inset-0">
        {/* Hour markers and numbers */}
        {Array.from({ length: totalHours }).map((_, i) => {
          const rotation = (i * 360) / totalHours;
          const number = i === 0 ? totalHours : i;
          
          // Calculate offset based on number position
          const getOffset = (num: number) => {
            if (num === 12) return -8;
            if (num === 6) return -4;
            if (num === 5) return -4;
            return -6;
          };
          
          return (
            <div key={i} className="absolute left-1/2 top-0 -translate-x-1/2 origin-bottom" style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: '50% 96px',
            }}>
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600" />
              <div 
                className="absolute top-3 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-400"
                style={{ 
                  transform: `rotate(-${rotation}deg)`,
                  marginTop: '2px',
                  marginLeft: `${getOffset(number)}px`
                }}
              >
                {number}
              </div>
            </div>
          );
        })}
      </div>

      {/* Clock hands container */}
      <div className="absolute inset-0">
        {/* Hour hand */}
        <div
          className="absolute left-1/2 bottom-1/2 -translate-x-1/2 w-1.5 h-16 bg-gray-800 dark:bg-gray-200 rounded-full origin-bottom"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />

        {/* Minute hand */}
        <div
          className="absolute left-1/2 bottom-1/2 -translate-x-1/2 w-1 h-20 bg-gray-600 dark:bg-gray-400 rounded-full origin-bottom"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />

        {/* Second hand */}
        <div
          className="absolute left-1/2 bottom-1/2 -translate-x-1/2 w-0.5 h-24 bg-red-500 rounded-full origin-bottom"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        />

        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default AnalogClock;