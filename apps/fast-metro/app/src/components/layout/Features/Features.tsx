import React from 'react';

export default function Features({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
      {children && children}
    </div>
  );
}
