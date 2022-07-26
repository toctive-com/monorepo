import React, { useEffect, useRef } from 'react';

import Page from '../../components/layout/Page/Page';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import { allStations } from '../../data/Stations';
import { gsap } from 'gsap';
import { isRTL } from '../../assets/js/appDirection';

export const TransitStationsScreen = () => {
  const transitStations = allStations.filter(
    (station) => station.isTransitStation
  );

  /* A hook that is used to animate the buttons in the menu. */
  const transitRef = useRef<any>(null);
  useEffect(() => {
    gsap.from(transitRef.current?.children, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      x: 60 * (isRTL() ? -1 : 1),
    });
  }, []);
  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader text="Transit stations" />

        <div className="flex flex-col gap-4" ref={transitRef}>
          {transitStations.map((station) => (
            <Header
              text={station.lines
                .map((line) => `Line ${line.lineNumber}`)
                .join(' - ')}
              title={station.name.en}
            />
          ))}
        </div>
      </div>
    </Page>
  );
};

// TODO: make this component collapsible
// TODO: Write the correct data instead of this dummy data
function Header({ title, text }: { title: string; text: string }) {
  return (
    <div className={`flex w-full flex-col justify-center p-4 shadow-sm`}>
      <div className="flex items-center justify-between">
        <span className="text-xl">{title}</span>
        <span className="text-xs text-gray-500">{text}</span>
      </div>
    </div>
  );
}
