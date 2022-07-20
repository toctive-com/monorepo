import React from 'react';

/**
 * The main wrapper component for the app.
 *
 * @param  - { children: React.ReactNode }
 * @returns A React component that renders a div with the className "overflow-x-hidden bg-gray-50 p-8"
 * and the children passed in as props.
 */
export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen h-screen overflow-x-hidden bg-gray-50 p-4 pb-28">
      {children}
    </div>
  );
};

export default Page;