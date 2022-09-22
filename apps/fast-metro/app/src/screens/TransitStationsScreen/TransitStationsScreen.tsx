import React, { useEffect, useRef } from 'react';

import Page from '../../components/layout/Page/Page';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import { allStations } from '../../data/Stations';
import { gsap } from 'gsap';
import { isRTL } from '../../assets/js/appDirection';
import { useTranslation } from 'react-i18next';

export const TransitStationsScreen = () => {
  const { t } = useTranslation();

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
        <PageHeader text={t('transit-stations-screen.title')} />

        <div className="flex flex-col gap-4" ref={transitRef}>
          {transitStations.map((station) => (
            <Header
              key={station.name.en}
              text={station.lines
                .map(
                  (line) =>
                    `${t('transit-stations-screen.line')} ${line.lineNumber}`
                )
                .join(' - ')}
              title={t(
                `stations.${station.name.en.toLowerCase().replace(' ', '-')}`
              )}
            />
          ))}
        </div>
      </div>
    </Page>
  );
};

// TODO: make this component collapsible
function Header({ title, text }: { title: string; text: string }) {
  return (
    <div
      className={`flex w-full flex-col justify-center rounded p-4 shadow-md`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">{title}</span>
        <span className="text-xs text-gray-500">{text}</span>
      </div>
    </div>
  );
}
