import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/layout/Page/Page';
import TripDetails from '../../components/layout/TripDetails/TripDetails';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import StationsSelector, {
  stationOptionI,
} from '../../components/shared/StationsSelector/StationsSelector';
import {
  makeTrip,
  Station,
  allStations,
  shortestPath,
} from '../../data/Stations';

export const StartTripScreen = () => {
  const [tripStations, setTripStations] = useState<Station[]>([]);
  const { t } = useTranslation();

  const startTrip = async (
    fromStation: stationOptionI,
    toStation: stationOptionI
  ) => {
    const startStation = allStations.filter(
      (station) =>
        station.name.en.toLowerCase() === fromStation.value?.toLowerCase()
    )[0];
    const targetStation = allStations.filter(
      (station) =>
        station.name.en.toLowerCase() === toStation.value?.toLowerCase()
    )[0];

    setTripStations(shortestPath(makeTrip(startStation, targetStation)));
  };

  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader isBack={true} text={t('start-trip-screen.title')} />
        <StationsSelector
          isFromTo={true}
          onChange={(fromStation, toStation) =>
            startTrip(fromStation, toStation)
          }
        />

        {tripStations.length > 0 && <TripDetails tripStations={tripStations} />}

        {/* TODO: add trip timer */}
        {/* <TimerController time={735} /> */}
      </div>
    </Page>
  );
};
