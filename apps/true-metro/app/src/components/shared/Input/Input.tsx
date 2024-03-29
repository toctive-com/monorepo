import React from 'react';

export function Input({
  className,
  height,
  type = 'text',
  placeholder = '...',
  onChange,
}: {
  className?: string;
  type?: string;
  placeholder?: string;
  height?: any;
  onChange?: (value: string) => void;
}) {
  return (
    <input
      type={type}
      height={height}
      className={` w-full rounded-md border-2 bg-gray-50 py-1.5 px-4 text-white outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-400 dark:focus:border-blue-500 ${className}`}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
}
export default Input;
