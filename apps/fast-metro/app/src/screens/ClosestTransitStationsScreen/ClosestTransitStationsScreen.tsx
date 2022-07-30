import { useCallback, useEffect, useState } from 'react';
import Page from '../../components/layout/Page/Page';
import TripDetails from '../../components/layout/TripDetails/TripDetails';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import StationsSelector from '../../components/shared/StationsSelector/StationsSelector';
import { allStations, makeTrip } from '../../data/Stations';

export const ClosestTransitStationsScreen = () => {
  const [startStation, setStartStation] = useState<any>(null);
  const [stations, setStations] = useState<any>([]);

  /* A React Hook that is called when the component is mounted and when the startStation state changes. */
  const handleStationChange = useCallback(async () => {
    if (!startStation) {
      return;
    }

    const transitStations = allStations.filter(
      (station) => station.isTransitStation
    );

    const allStationsBetweenStartAndTransit = [];
    for (const transitStation of transitStations) {
      const startStationAsStationI = allStations.filter(
        (station) => station.name.en === startStation.value
      )[0];

      allStationsBetweenStartAndTransit.push(
        await makeTrip(startStationAsStationI, transitStation)
      );
    }

    const closestTransit = allStationsBetweenStartAndTransit.reduce(
      (prev, next) => (prev.length > next.length ? next : prev)
    );

    setStations(closestTransit);
  }, [startStation]);

  useEffect(() => {
    handleStationChange();
  }, [handleStationChange, startStation]);

  return (
    <Page>
      <div className="flex flex-col gap-5 bg-gray-50 px-5">
        <PageHeader className="m-0" isBack={true} text="Closest Transit" />
        <StationsSelector
          isFromTo={false}
          onChange={(fromStation) => setStartStation(fromStation)}
        />

        {stations.length > 0 && (
          <p>Closest Transit Station is: {stations.at(-1).name.en}</p>
        )}
        {stations.length > 0 && <TripDetails tripStations={stations} />}
        {/* <TimerController time={735} /> */}
      </div>
    </Page>
  );
};
