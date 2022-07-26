import React from 'react';

export default function Features({
  children,
  forwardRef,
}: {
  children: React.ReactNode;
  forwardRef: any;
}) {
  return (
    <div
      className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4"
      ref={forwardRef}
    >
      {children && children}
    </div>
  );
}
