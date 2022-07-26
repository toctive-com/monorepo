import { useEffect, useState } from 'react';

interface Switch {
  IsDark?: any;
  className?: string;
}

export default function Switch({ IsDark, className }: Switch) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    IsDark(clicked);
  }, [IsDark, clicked]);

  return (
    <div
      className={` ${className} `}
      onClick={() => {
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
