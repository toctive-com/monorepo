import React from 'react';

export function Input(props: any) {
  const {
    className,
    height,
    type,
    placeholder = 'here...',
  }: {
    className?: string;
    type: string;
    placeholder: string;
    height?: any;
  } = props;
  return (
    <input
      type={type}
      height={height}
      className={` w-full rounded-md  border-2 bg-gray-50 py-1.5 px-4 outline-none focus:border-blue-500 ${className}`}
      placeholder={placeholder}
    />
  );
}
export default Input;
