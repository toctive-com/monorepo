import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Page from '../../components/layout/Page/Page';
import LinesColors from '../../components/shared/LinesColors/LinesColors';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import Station from '../../components/shared/Station/Station';

import {
  allStations,
  makeTrip,
  shortestPath,
  Station as StationI,
} from '../../data/Stations';

export const SeeAllStations = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0];

  const [searchParams] = useSearchParams();
  const start = searchParams.get('start');
  const end = searchParams.get('end');

  const [tripStations, setTripStations] = useState<StationI[]>([]);

  const handleStationChange = useCallback(async () => {
    const startStation = allStations.filter(
      (station) => station.name.en.toLowerCase() === start?.toLowerCase()
    )[0];

    const targetStation = allStations.filter(
      (station) => station.name.en.toLowerCase() === end?.toLowerCase()
    )[0];

    setTripStations(shortestPath(makeTrip(startStation, targetStation)));
  }, [end, start]);

  useEffect(() => {
    handleStationChange();
  }, [start, end, handleStationChange]);

  const [currentStation, setCurrentStation] = useState(0);

  return (
    <Page className="!p-8">
      <PageHeader text={t('see-all-stations-screen.title')} />
      <div className="body mt-6 flex flex-col gap-4">
        {tripStations.map((station, index) => (
          <Station
            isActive={index <= currentStation}
            onClick={() => setCurrentStation(index)}
            name={station.name[currentLang as 'en' | 'ar']}
            key={station.name.en}
            lastStation={station === tripStations.at(-1)}
          />
        ))}
      </div>
      <LinesColors className="mt-8" />
    </Page>
  );
};
