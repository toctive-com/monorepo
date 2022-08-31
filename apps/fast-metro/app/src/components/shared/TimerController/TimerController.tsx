import { useState } from 'react';
import { formatTime } from '../../../utils/formatTime';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export function TimerController({
  time,
  className,
}: {
  time: number;
  className?: string;
}) {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  return (
    <div className={`flex w-full flex-col justify-center gap-5 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-xl text-gray-500">
          Start a timer for this trip
        </span>

        <PrimaryButton
          size="sm"
          text="Start Timer"
          onClick={() => setIsTimerStarted(true)}
        />
      </div>

      {/* Timer must be hidden until the user start it */}
      {isTimerStarted && (
        <div className="flex justify-center text-2xl font-semibold text-red-500">
          {formatTime(time)}
        </div>
      )}
    </div>
  );
}

export default TimerController;
