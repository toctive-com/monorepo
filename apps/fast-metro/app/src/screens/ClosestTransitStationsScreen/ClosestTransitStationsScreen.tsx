import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/layout/Page/Page';
import TripDetails from '../../components/layout/TripDetails/TripDetails';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import StationsSelector from '../../components/shared/StationsSelector/StationsSelector';
import { allStations, makeTrip, shortestPath } from '../../data/Stations';

export const ClosestTransitStationsScreen = () => {
  const [startStation, setStartStation] = useState<any>(null);
  const [stations, setStations] = useState<any>([]);

  /* A React Hook that is called when the component is mounted and when the startStation state changes. */
  useEffect(() => {
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
        shortestPath(makeTrip(startStationAsStationI, transitStation))
      );
    }

    const closestTransit = allStationsBetweenStartAndTransit.reduce(
      (prev, next) => (prev.length > next.length ? next : prev)
    );

    setStations(closestTransit);
  }, [startStation]);

  const { t } = useTranslation();

  return (
    <Page>
      <div className="flex flex-col gap-5">
        <PageHeader
          className="m-0"
          isBack={true}
          text={t('closest-transit-screen.title')}
        />
        <StationsSelector
          isFromTo={false}
          onChange={(fromStation) => setStartStation(fromStation)}
        />

        {stations.length > 0 && (
          <p>
            {t('closest-transit-screen.closest-transit-station-is')}:{' '}
            {t(
              `stations.${stations
                .at(-1)
                .name.en.toLowerCase()
                .replace(' ', '-')}`
            )}
          </p>
        )}
        {stations.length > 0 && <TripDetails tripStations={stations} />}
        {/* <TimerController time={735} /> */}
      </div>
    </Page>
  );
};
