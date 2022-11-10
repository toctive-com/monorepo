export interface OptionComponentI {
  text: string;
  value: any;
  setValue?: (value: any) => void;
  selectedValue: string;
}
export function Option({
  text,
  value,
  setValue,
  selectedValue,
}: OptionComponentI) {
  return (
    <div
      className="flex cursor-pointer select-none items-center gap-4"
      onClick={() => {
        setValue && setValue(value);
      }}
    >
      <div
        className={`h-4 w-4 rounded-full border-2 p-2
                    ${
                      value === selectedValue
                        ? 'border-blue-400 bg-blue-500'
                        : 'border-blue-500'
                    }
                `}
      ></div>
      <span>{text}</span>
    </div>
  );
}
