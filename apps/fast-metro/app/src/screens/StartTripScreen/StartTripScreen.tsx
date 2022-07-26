import React, { useState } from 'react';
import Page from '../../components/layout/Page/Page';
import TripDetails from '../../components/layout/TripDetails/TripDetails';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import StationsSelector, {
  stationOptionI,
} from '../../components/shared/StationsSelector/StationsSelector';
import { makeTrip, Station, allStations } from '../../data/Stations';

export const StartTripScreen = () => {
  const [tripStations, setTripStations] = useState<Station[]>([]);

  const startTrip = (
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

    setTripStations(makeTrip(startStation, targetStation));
  };

  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader isBack={true} text="Start Trip" />
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
