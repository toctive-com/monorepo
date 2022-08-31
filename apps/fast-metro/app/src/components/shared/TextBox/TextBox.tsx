import React from 'react';

export default function TextBox(props: any) {
  const {
    className,
    content,
    children,
  }: { className?: string; content: string; children: React.ReactNode } = props;
  return (
    <div
      className={`rounded-lg bg-gray-100 p-4 text-base dark:bg-gray-800 ${className}`}
    >
      {content}
      {children}
    </div>
  );
}
