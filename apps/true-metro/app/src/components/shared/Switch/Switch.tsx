import { useEffect, useState } from 'react';

interface Switch {
  isSwitched: boolean;
  className?: string;
  onClick?: (isClicked: boolean) => void;
}

export default function Switch({ isSwitched, className, onClick }: Switch) {
  const [clicked, setClicked] = useState(isSwitched);

  return (
    <div
      className={` ${className} `}
      onClick={() => {
        onClick && onClick(!clicked);
        setClicked(!clicked);
      }}
    >
      {clicked ? <On /> : <Off />}
    </div>
  );
}

function Off() {
  return (
    <div className="relative h-5 w-10 rounded-2xl bg-gray-400">
      <div className="absolute left-0 top-0.5 ml-0.5 h-4 w-4 rounded-full bg-white "></div>
    </div>
  );
}
function On() {
  return (
    <div className="relative h-5 w-10 rounded-2xl bg-blue-500">
      <div className="absolute right-0 top-0.5 mr-0.5 h-4 w-4 rounded-full bg-white "></div>
    </div>
  );
}
