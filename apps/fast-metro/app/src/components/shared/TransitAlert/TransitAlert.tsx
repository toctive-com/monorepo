interface TransitAlertComponentI {
  line: number;
  // direction?: string;
  className?: string;
}

export function TransitAlert({
  line,
  // direction,
  className,
}: TransitAlertComponentI) {
  return (
    <div
      className={`mb-4 flex flex-col rounded-md bg-red-500 px-4 py-4 shadow-xl shadow-red-300 ${className}`}
    >
      <span className="text-xl  text-white">
        Change to the other line
        {/* Change line to: */}
        {/* <span className="text-xl font-semibold text-white">Line {line}</span> */}
      </span>

      {/* <span className="text-xl text-white">
        Direction: <span className="text-xl font-semibold">{direction}</span>
      </span> */}
    </div>
  );
}

export default TransitAlert;
