import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import LinesColors from '../../components/shared/LinesColors/LinesColors';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import Station from '../../components/shared/Station/Station';

import {
  allStations,
  makeTrip,
  Station as StationI,
} from '../../data/Stations';

export const SeeAllStations = () => {
  const [searchParams] = useSearchParams();
  const start = searchParams.get('start');
  const end = searchParams.get('end');

  const [tripStations, setTripStations] = useState<StationI[]>([]);

  useEffect(() => {
    const startStation = allStations.filter(
      (station) => station.name.en.toLowerCase() === start?.toLowerCase()
    )[0];

    const targetStation = allStations.filter(
      (station) => station.name.en.toLowerCase() === end?.toLowerCase()
    )[0];

    setTripStations(makeTrip(startStation, targetStation));
  }, [start, end]);

  return (
    <div className="flex flex-col justify-center bg-gray-50 p-8">
      <PageHeader text="Trip Stations" />

      <div className="body mt-6 flex flex-col gap-4">
        {tripStations.map((station) => (
          <Station
            name={station.name.en}
            key={station.name.en}
            lastStation={station === tripStations.at(-1)}
          />
        ))}
      </div>

      <LinesColors className="mt-8" />
    </div>
  );
};
