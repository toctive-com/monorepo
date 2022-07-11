export function LinesColors({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 rounded-lg bg-gray-100 ${className}`}>
      <LineColor color="blue-500" text="For Line 1" />
      <LineColor color="red-800" text="For Line 2" />
      <LineColor color={'green-500'} text="For Line 3" />
    </div>
  );
}

const LineColor = ({ color, text }: { color: string; text: string }) => {
  return (
    <div className={`flex items-center gap-5 `}>
      <div
        className={`dot
        h-4 w-4 rounded-full bg-${color}
    `}
      ></div>

      <div className={`TT text-base text-${color}`}>{text}</div>
    </div>
  );
};

export default LinesColors;
