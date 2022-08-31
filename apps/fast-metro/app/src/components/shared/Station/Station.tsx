import { useState } from 'react';

interface dotI {
  className?: string;
  checked: boolean;
}

/**
 * It creates a component that renders 5 dots.
 *
 * @param {dotI}  - dotI
 * @returns A div with 5 dots inside of it.
 */
const Dots = ({ checked, className }: dotI) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      {Array.from({ length: 5 }, (v, index) => (
        <span
          key={'dot' + index}
          className={`h-2 w-2 rounded-full
       ${checked ? 'bg-blue-500' : 'bg-gray-300 '}
       `}
        ></span>
      ))}
    </div>
  );
};

export interface StationI {
  name: string;
  lastStation?: boolean;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

/**
 * It's a function that takes in a name and a lastStation boolean and returns a div with a circle and a
 * name
 *
 * @param {StationI}  - name - the name of the station
 * @returns A React component
 */
export function Station({
  name,
  lastStation = false,
  className = '',
  isActive = false,
  onClick,
}: StationI) {
  // const [checked, setChecked] = useState(false);

  return (
    <div
      className={`station-com flex flex-col ${className}`}
      onClick={() => onClick && onClick()}
    >
      <div className="circle-name flex gap-5 ">
        <div
          className={`
         circle h-6 w-6 rounded-full
         ${isActive ? 'bg-blue-500' : ' border-4 border-blue-500'} 
          `}
        ></div>

        <span className="name text-base">{name}</span>
      </div>

      {!lastStation && <Dots className="m-2 self-start" checked={isActive} />}
    </div>
  );
}

export default Station;
