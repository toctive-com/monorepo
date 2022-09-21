import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Page from '../../components/layout/Page/Page';
import LinesColors from '../../components/shared/LinesColors/LinesColors';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import Station from '../../components/shared/Station/Station';
import TransitAlert from '../../components/shared/TransitAlert/TransitAlert';

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

  type colorI = 'red' | 'blue' | 'green' | 'black';
  let stationColor: colorI = 'blue';

  return (
    <Page className="!px-8">
      <PageHeader text={t('see-all-stations-screen.title')} />
      <div className="body mt-6 flex flex-col gap-4">
        {tripStations.map((station, index) => {
          if (station.lines.length > 1) stationColor = 'black';
          else if (station.lines[0].lineNumber === 1) {
            stationColor = 'blue';
          } else if (station.lines[0].lineNumber === 2) {
            stationColor = 'red';
          } else if (station.lines[0].lineNumber === 3) {
            stationColor = 'green';
          } else {
            stationColor = 'blue';
          }

          return (
            <>
              <Station
                isActive={index <= currentStation}
                onClick={() => setCurrentStation(index)}
                name={station.name[currentLang as 'en' | 'ar']}
                key={station.name.en}
                lastStation={station === tripStations.at(-1)}
                color={stationColor}
              />
              {station.isTransitStation && station !== tripStations.at(-1) && (
                <TransitAlert
                  line={station.lines[0].lineNumber}
                  // direction={tripStations.at(-1)?.name.en || ''}
                />
              )}
            </>
          );
        })}
      </div>
      <LinesColors />
    </Page>
  );
};
