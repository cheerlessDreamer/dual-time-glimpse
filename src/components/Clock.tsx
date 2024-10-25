import { Card } from "@/components/ui/card";

interface ClockProps {
  time: string;
  label: string;
}

const Clock = ({ time, label }: ClockProps) => {
  return (
    <Card className="p-8 flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-lg">
      <div className="text-6xl font-mono font-bold tracking-wider mb-4">
        {time}
      </div>
      <div className="text-lg text-gray-500 dark:text-gray-400 font-medium">
        {label}
      </div>
    </Card>
  );
};

export default Clock;