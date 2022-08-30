import { useState } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';

export default function CollapseBox({
  className,
  title,
  subtitle,
  children,
  isExpanded = false,
}: {
  className?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  isExpanded?: boolean;
}) {
  const [clicked, setClicked] = useState(isExpanded || false);

  return (
    <div
      className={`flex cursor-pointer select-none flex-col rounded-md bg-white p-6 dark:bg-gray-900 ${
        clicked ? 'shadow-lg' : 'shadow-sm'
      } ${className}`}
      onClick={() => setClicked(!clicked)}
    >
      <div className="flex justify-between">
        <span className="text-xl">{title}</span>
        {clicked ? (
          <div className="rotate-270 transition-all">
            <MdKeyboardArrowDown size={28} className="text-gray-700" />
          </div>
        ) : (
          <div className="rotate-90 transition-all">
            <MdKeyboardArrowDown size={28} className="text-gray-700" />
          </div>
        )}
      </div>
      <span className="text-sm text-gray-500">{subtitle}</span>
      <div className={`${clicked ? 'mt-4' : 'mt-0'}`}>
        {clicked && children}
      </div>
    </div>
  );
}
