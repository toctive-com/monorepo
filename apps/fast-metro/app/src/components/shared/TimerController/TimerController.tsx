import PrimaryButton from '../PrimaryButton/PrimaryButton';

export function TimerController({
  time,
  className,
}: {
  time: number;
  className?: string;
}) {
  return (
    <div className={`flex w-full flex-col justify-center gap-5 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-xl text-gray-500">Start your trip timer</span>

        <PrimaryButton size="md" text="Start Timer" />
      </div>

      <div className="flex justify-center text-xl text-red-500">{time}</div>
    </div>
  );
}

export default TimerController;
